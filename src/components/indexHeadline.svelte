<div>
  <h2>
    <span class="index">{i}.</span>
    {title}
  </h2>
  <div class="row">
    <slot />
  </div>
</div>

<script>
    export let i, title;
</script>