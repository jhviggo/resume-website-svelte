<script>
  import Pills from "./pills.svelte";

  export let id;
  export let banner;
  export let bannerAlt;
  export let title;
  export let text;
  export let hasPDF = false;
  export let fitHeight = false;
  export let tags;
</script>

<div class="my-card round" class:fit-height={fitHeight}>
  <a href="/projects/{id}">
    <img src={banner} alt={bannerAlt}>
  </a>
  <div class="pad-s">
    <h4>
      <a href="/projects/{id}">{title}</a>
    </h4>
    {#if hasPDF}
      <p class="pdf margin-0">[Has PDF]</p>
    {/if}
    <span>{text}</span>
  </div>
  <div class="tags pad-s">
    <Pills tags={tags} />
  </div>
</div>

<style>
  .my-card {
    background-color: var(--light-background);
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  img {
    width: 100%;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  .tags {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1rem;
    overflow-x: auto;
  }

  .pdf {
    color: var(--accent);
  }

  .fit-height {
    height: fit-content;
  }
</style>
