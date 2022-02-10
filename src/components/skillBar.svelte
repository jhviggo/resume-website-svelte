<script>
  export let title, skills;
</script>

<div>
  <h5 class="title">{ title }</h5>
  {#each skills as skill}
    {skill.content}
    <div class="bar {skill.skillGroup} mb-2"/>
  {/each}
</div>

<style lang="scss">
@keyframes load{
  from {
    width: 0;
  }
}
@-webkit-keyframes load{
  from {
    width: 0;
  }
}
@-moz-keyframes load{
  from {
    width: 0;
  }
}
@-o-keyframes load{
  from {
    width: 0;
  }
}

.bar {
  background-color: $lighter-background;
  border-radius: 15px;
}

.bar::before{
  content:  "";
  display: block;
  border-radius: inherit;
  height: 0.5rem;
  animation: load 2s 0s;
  -webkit-animation: load 2s 0s;
  -moz-animation: load 2s 0s;
  -o-animation: load 2s 0s;
}

.bar.learning::before{
  width: calc(20%);
  background-color: rgba(33, 150, 243, 0.3);
}
.bar.basic::before{
  width: calc(40%);
  background-color: rgba(33, 150, 243, 0.4);
}
.bar.intermediate::before{
  width: calc(60%);
  background-color: rgba(33, 150, 243, 0.55);
}
.bar.advanced::before{
  width: calc(80%);
  background-color: rgba(33, 150, 243, 0.75);
}
.bar.expert::before{
  width: calc(100%);
  background-color: rgba(33, 150, 243, 1);
}
</style>