<script>
  export let links;
</script>

<nav>
  <div class="container">
    <div class="row">
      <img src="/logo.png" alt="Website logo.">
      {#each links as link}
        <a class="col-auto p-3" href={link.to}>
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style lang="scss">
nav {
  background-color: $lighter-background;
}

img {
  max-height: 3rem;
  width: auto;
}

.row {
  align-items: center;
}

a {
  color: $text;
  text-decoration: none;
  cursor: pointer;

  &:not(.logo):hover {
    background-color: $blue;
    color: black;
  }
}
</style>
