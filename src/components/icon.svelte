<i class="material-icons {colorClass}" >
  <slot/>
</i>

<script>
  export let colorClass;
</script>

<style lang="scss">
  i {
    font-size: 2rem;
  }

  .green {
    color: $green;
  }

  .blue {
    color: $blue;
  }

  .yellow {
    color: $yellow;
  }
</style>