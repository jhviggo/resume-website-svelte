<script>
  import { categories } from '../lib/constants';

  export let tags;
</script>

{#each tags || [] as tag}
  <span class="pill {categories[tag].id}">{categories[tag].text}</span>
{/each}

<style>
  .pill {
    border-radius: 1rem;
    padding: 0 0.5rem;
    text-align: center;
  }
</style>
