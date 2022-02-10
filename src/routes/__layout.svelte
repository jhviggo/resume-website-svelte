<script>
	import NavigationBar from "../components/navigationBar.svelte";
	import Footer from "../components/footer.svelte";

	const links = [
		{
			name: 'Home',
			to: '/'
		},
		{
			name: 'My CV',
			to: '/cv'
		},
		{
			name: 'Projects',
			to: '/projects'
		}
	];

	const socials = [
		{
			icon: 'github.svg',
			iconAlt: 'Link to my Github page',
			title: 'Github',
			to: 'https://viggo.work/github.com/jhviggo/'
		},
		{
			icon: 'facebook.svg',
			iconAlt: 'Link to my Facebook page',
			title: 'Facebook',
			to: 'https://facebook.com/viggo.work'
		},
		{
			icon: 'linked-in.png',
			iconAlt: 'Link to my Linkedin page',
			title: 'LinkedIn',
			to: 'https://www.linkedin.com/in/viggo-petersen/'
		}
	];
</script>

<NavigationBar links={links}/>

<slot></slot>

<Footer socials={socials}/>

<style lang="scss" global>
  @import '../../assets/global.scss';

	body {
		color: $text;
		font-family: 'Open Sans', sans-serif;
		background-color: $background;
	}
</style>
