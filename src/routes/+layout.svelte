<script>
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';

	// for GitHub pages
	export const prerender = true;
</script>

<div>
	<Navbar />
	<slot />
	<Footer />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
