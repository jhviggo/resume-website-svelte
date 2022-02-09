<script>
const links = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'My CV',
    to: '/cv'
  },
  {
    name: 'Projects',
    to: '/projects'
  }
];
</script>

<nav>
  <div class="container">
    <div class="row">
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
