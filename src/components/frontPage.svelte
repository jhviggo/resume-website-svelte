<script>
  export let coreValues, intro;
  
  import Icon from './icon.svelte';
  import IndexHeadline from './indexHeadline.svelte';
</script>

<div class="container mb-5">
  <div class="row pb-5 intro">
    <div class="col col-md-6 col-lg-5 headline-container">
      <h1 class="headline">{intro.headline}</h1>
      <p>{intro.description}</p>
    </div>
    <div class="col col-md-auto p-0 portrait-container">
      <div class="portrait-frame">
        <img class="portrait" src={intro.portrait} alt={intro.portraitAlt} />
      </div>
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
      <a class="btn btn-icon btn-outline-primary" href="/cv" role="button">Resume <i class="material-icons">chevron_right</i></a>
    </div>
  </IndexHeadline>
</div>

<style lang="scss">
  .intro {
    margin-top: 5rem;
    margin-bottom: 5rem;
    background-color: $light-background;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0 !important;
    border-radius: $radius 0 0 $radius;
  }

  .headline-container {
    padding-top: 1rem;
    padding-left: 1rem;
  }

  .headline {
    color: $blue;
    min-width: 225px;
  }

  @media (min-width: $md) {
    .portrait-container {
      background-color: $background;
      border-radius: 50% 0 0 50%;
      border: 5px solid $background;
    }

    .portrait-frame {
      width: 300px;
      height: 300px;
      overflow: hidden;
      background-color: $light-background;
      border-radius: 50%;
      justify-content: center;
      align-items: end;
    }
  }

  .portrait-frame {
    display: flex;
    justify-content: center;
  }

  .portrait {
    height: 250px;
  }

  .core-values {
    text-align: center;
  }
</style>