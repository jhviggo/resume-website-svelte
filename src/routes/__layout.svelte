<script>
	import NavigationBar from "../components/navigationBar.svelte";
</script>

<NavigationBar />

<slot></slot>

<footer>
  footer
</footer>

<style lang="scss" global>
  @import '../../static/styles/global.scss';

	body {
		color: $text;
		font-family: 'Open Sans', sans-serif;
		background-color: $background;
	}
</style>
