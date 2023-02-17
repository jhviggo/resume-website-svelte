<script>
  export let coreValues, intro;
  
  import Icon from './icon.svelte';
  import IndexHeadline from './indexHeadline.svelte';
</script>

<div class="container mb-5">
  <div class="row pb-5 my-5">
    <div class="col col-md-6 col-lg-5">
      <h1>{intro.headline}</h1>
      <p>{intro.description}</p>
    </div>
  </div>
  
  <IndexHeadline i={0} title="Core values">
    {#each coreValues as value}
      <div class="col-12 col-md-4 core-values">
        <div class="index-panel">
          <Icon colorClass={value.color}>{value.icon}</Icon>
          <h3>{value.title}</h3>
        </div>
        <p>{value.text}</p>
      </div>
    {/each}
  </IndexHeadline>

  <hr class="mb-5 mt-5">
  <IndexHeadline i={1} title="Resume">
    <div class="col-12 col-md-7 col-lg-5">
      <p>My name is Viggo, I grew up in Denmark and started coding at a young age. I have always strived to make the world a better place by helping others through coding camps, hackathons and teaching.</p>
      <p>I am currently studying Software Technology Engineering and work for Salling Group A/S, besides that I try to attend as many events as possible. Please click the button below for an overview.</p>
      <a class="btn btn-icon btn-outline-primary mt-4" href="/cv" role="button">Resume <i class="material-icons">chevron_right</i></a>
    </div>
  </IndexHeadline>

  <hr class="mb-5 mt-5">
  <IndexHeadline i={2} title="Machine Learning Projects">
    <div class="col-12 col-md-7 col-lg-5">
      <p>Through the years I've done a bunch of project both in school and in my spare time. I try to document as many of these projects as possible and post them on <a href="/projects">my projects</a> page.</p>
      <a class="btn btn-icon btn-outline-primary mt-4" href="/mal" role="button">Projects <i class="material-icons">chevron_right</i></a>
    </div>
  </IndexHeadline>
</div>

<style lang="scss">
  .headline {
    color: $blue;
    min-width: 225px;
  }

  .core-values {
    text-align: center;
  }
</style>