<script>
  import Panel from './panel.svelte';
  import Icon from './icon.svelte';
  import IndexHeadline from './indexHeadline.svelte';
</script>

<div class="container mb-5">
  <div class="row mb-5 pb-5 intro">
    <div class="col col-md-7 col-lg-5 headline-container">
      <h1 class="headline">Viggo Petersen</h1>
      <p>I'm a software developer who loves learning and challenging myself, most of my days are spend reading, coding or hacking away, be it through my studies, work or spare time!</p>
    </div>
    <div class="col-auto p-0 portrait-container">
      <div class="portrait-frame">
        <img class="portrait" src="/images/headshot_outline.webp" alt="Portrait" />
      </div>
    </div>
  </div>
  
  <IndexHeadline i={0} title="Core values">
    <div class="col-12 col-md-4 core-values">
      <div class="index-panel">
        <Icon colorClass="green">cloud_done</Icon>
        <h3>Reliability</h3>
      </div>
      <p>Services should always be available and ready for use and we have the tools to make that happen, we just need to use them</p>
    </div>

    <div class="col-12 col-md-4 core-values">
      <div class="index-panel">
        <Icon colorClass="blue">memory</Icon>
        <h3>Optimization</h3>
      </div>
      <p>Making code more reliable, run faster or use less memory can be a challenge as it may require vast knowledge of algorithms and data structures, but nothing beats the feeling of making great code</p>
    </div>

    <div class="col-12 col-md-4 core-values">
      <div class="index-panel">
        <Icon colorClass="yellow">lightbulb</Icon>
        <h3>Creativity</h3>
      </div>
      <p>Being creative and having fun is very important! Attending coding challenges, hackathons or creating something ridiculous is great for expanding ones knowledge and creative thinking</p>
    </div>
  </IndexHeadline>

  <hr class="mb-5 mt-5">

  <IndexHeadline i={1} title="Resume">
    <div class="col-12 col-md-7 col-lg-5">
      <p>My name is Viggo, I grew up in Denmark and started coding at a young age. I have always strived to make the world a better place by helping others through coding camps, hackathons and teaching.</p>
      <p>I am currently studying Computer Science and working for Salling Group A/S, besides that I try to attend as many events as possible. Please click the button below for an overview.</p>
      <a class="btn btn-icon btn-outline-primary" href="/cv" role="button">Resume <i class="material-icons">chevron_right</i></a>
    </div>
  </IndexHeadline>
</div>

<style lang="scss">
  .intro {
    margin-top: 20rem;
    background-color: $light-background;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0 !important;
    border-radius: 8px 0 0 8px;
  }

  .headline-container {
    padding-top: 1rem;
    padding-left: 1rem;
  }

  .headline {
    color: $blue;
  }

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
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .portrait {
    height: 250px;
  }

  .core-values {
    text-align: center;
  }
</style>