<div>
  <slot>
    This panel is empty - please add content;
  </slot>
</div>

<style lang="scss">
  div {
    background-color: $dark-blue;
    box-shadow: 4px 8px 8px rgba(0,0,0,.2);
    width: fit-content;
    padding: $gap;
  }
</style>