<script>
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

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
