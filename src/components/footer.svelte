<script>
  export let socials;
</script>

<footer>
  <div class="container py-2">
    <div class="row">
      {#each socials as social}
        <a class="col-auto p-0 mx-3" href={social.to} target="_blank">
          <img src="/images/{social.icon}" alt={social.iconAlt}/>
          {social.title}
        </a>
      {/each}
    </div>
    <div class="row">
      Viggo.work {new Date().getFullYear()}
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    background-color: $light-background;
  }

  img {
    max-width: 30px;
  }

  .row {
    display: flex;
    justify-content: center;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $text;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }
  }
</style>
