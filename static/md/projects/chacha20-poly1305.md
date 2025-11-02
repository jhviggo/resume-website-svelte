# SSL encryption for Embedded devices

[Read the full paper here](https://github.com/jhviggo/chacha20-poly1305/blob/master/viggo_SCP_iot_security_with_chacha20_poly1305.pdf)

[Github Repository & documentation](https://github.com/jhviggo/chacha20-poly1305)

IT security is a growing concern for embedded devices as more and more are connected to the internet. This paper aims to improve the security by developing a general AVR-C implementation of the Transport Layer Security (TLS) algorithms [Chacha20](https://cr.yp.to/chacha.html) and [Poly1305](https://cr.yp.to/mac.html).

## Paper overview
ChaCha20 is a stream cipher encryption algorithm with a 256-bit key, meaning
it encrypts data byte by byte instead of encrypting blocks of data at once. The
central component of the algorithm is the quarter round, which is defined by
a set of logical operators on four bytes of data as shown on the figure below.

![chacha20](/images/chacha20.jpg)

The algorithm runs through multiple column rounds and diagonal rounds on the block constructed as the table below.
|         |       |       |       |
|---------|-------|-------|-------|
| const   | const | const | const |
| Key     | Key   | Key   | Key   |
| Key     | Key   | Key   | Key   |
| Counter | Nonce | Nonce | Nonce |


The code for generating the block is as follows
```c
void chacha20_setup(chacha20_ctx *ctx, const uint8_t *key, uint32_t length, uint8_t nonce[8]) {
  const char *constants = (length == 32 ? "expand 32-byte k" :"expand 16-byte k");
  ctx->state[0] = U8TO32_LITTLE(constants + 0);
  ctx->state[1] = U8TO32_LITTLE(constants + 4);
  ctx->state[2] = U8TO32_LITTLE(constants + 8);
  ctx->state[3] = U8TO32_LITTLE(constants + 12);
  ctx->state[4] = U8TO32_LITTLE(key + 0 * 4);
  ctx->state[5] = U8TO32_LITTLE(key + 1 * 4);
  ctx->state[6] = U8TO32_LITTLE(key + 2 * 4);
  ctx->state[7] = U8TO32_LITTLE(key + 3 * 4);
  ctx->state[8] = U8TO32_LITTLE(key + 4 * 4);
  ctx->state[9] = U8TO32_LITTLE(key + 5 * 4);
  ctx->state[10] = U8TO32_LITTLE(key + 6 * 4);
  ctx->state[11] = U8TO32_LITTLE(key + 7 * 4);
  ctx->state[12] = COUNTER;
  ctx->state[13] = COUNTER;
  ctx->state[14] = U8TO32_LITTLE(nonce + 0);
  ctx->state[15] = U8TO32_LITTLE(nonce + 4);
  ctx->available = 0;
}
```
And encrypting byes
```c
void chacha20_encrypt_bytes(chacha20_ctx *ctx, const uint8_t *in, uint8_t *out, uint32_t length) {
  if (!length) {
    return;
  }
  uint8_t *const k = (uint8_t *)ctx->keystream;

  // If remaining keystream is available, use it
  if (ctx->available) {
    uint32_t amount = MIN(length, ctx->available);
    chacha20_xor(k + (sizeof(ctx->keystream) - ctx->available), &in, &out, amount);
    ctx->available -= amount;
    length -= amount;
  }

  // XOR remaining message if any
  while (length) {
    uint32_t amount = MIN(length, sizeof(ctx->keystream));
    // Update keystream with block
    chacha20_block(ctx, ctx->keystream);
    chacha20_xor(k, &in, &out, amount);
    length -= amount;
    ctx->available = sizeof(ctx->keystream) - amount;
  }
}
```

The implementation was tested with 10 runs of 1MB data chunks.

| Run  | Execution time  | Data size |
|------|-----------------|-----------|
| 1    | 0.340s          | 1MB       |
| 2    | 0.340s          | 1MB       |
| 3    | 0.330s          | 1MB       |
| 4    | 0.340s          | 1MB       |
| 5    | 0.340s          | 1MB       |
| 6    | 0.340s          | 1MB       |
| 7    | 0.330s          | 1MB       |
| 8    | 0.340s          | 1MB       |
| 9    | 0.340s          | 1MB       |
| 10   | 0.340s          | 1MB       |

Based on this the Chacha20 implementation is between 2.4 and 4.7 times faster then AES running on an ESP32.
