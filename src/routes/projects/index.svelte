<script>
  import Card from '../../components/card.svelte';
  import Spinner from '../../components/spinner.svelte';
  import { getProjects } from '../../lib';
</script>

<div class="container">
  <h1>Projects</h1>
  <div class="projects">
    {#await getProjects()}
      <Spinner />
    {:then projects}
      {#each projects as p}
        <Card banner={p.banner} title={p.title} text={p.text} id={p.id} tags={p.tags} hasPDF={p.hasPdf} />
      {/each}
    {:catch err}
    ⚠️ {err.message}
    {/await}
  </div>
</div>
<style>
  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (max-width: 576px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
</style>
