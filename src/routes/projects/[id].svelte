<script>
  import { marked } from 'marked';
  import hljs from 'highlight.js';

  import { page } from '$app/stores';
  import { getMarkdown } from '../../lib';
  import { getProjects } from '../../lib';
  import Spinner from '../../components/spinner.svelte';
  import Panel from '../../components/panel.svelte';
  import Card from '../../components/card.svelte';

  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartypants: false,
    xhtml: false
  });

  async function getThisProject() {
    const projects = await getProjects();
    return projects.filter((p) => p.id === $page.params.id)[0];
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/highlight.css">
</svelte:head>

<div class="container">
  <div class="side-by-side">
    {#await getThisProject()}
      <Spinner />
    {:then p}
      <div id="card">
        <Card fitHeight banner={p.banner} title={p.title} text={p.text} id={p.id} tags={p.tags} hasPDF={p.hasPdf} />
      </div>
    {:catch err}
      ⚠️ {err.message}
    {/await}
    <div class="article-side">
      <Panel fullHeight>
        <div class="article">
          {#await getMarkdown(`projects/${$page.params.id}.md`)}
            <Spinner />
          {:then page}
            {@html marked.parse(page)}
          {:catch}
            ⚠️ Unable to fetch project
          {/await}
        </div>
      </Panel>
    </div>
  </div>
</div>

<style>
  .container {
    padding: 1rem;
  }

  .side-by-side {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    height: 100%;
  }

  .article-side {
    grid-column: 2 / 5;
    grid-row: 1 / 3;
  }

  .article {
    margin: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 0.25rem;
    }

    .side-by-side {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .article-side {
      grid-column: unset;
      grid-row: unset;
      overflow: auto;
    }

    #card {
      display: none;
    }
  }

  /* Article specific styling */
  :global(.article img) {
    max-height: 40ch;
  }

  :global(.article td, .article th) {
    padding: 0 0.25rem;
  }

  :global(.article pre) {
    background-color: var(--code-bg);
    padding: 0.5rem;
  }
</style>
