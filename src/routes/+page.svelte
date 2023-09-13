<script>
	import ChuckNorris from '../components/ChuckNorris.svelte';
	import SpeechBubble from '../components/SpeechBubble.svelte';

	let joke;

	const getJoke = async () => {
		const res = await fetch('https://api.chucknorris.io/jokes/random');
		const json = await res.json();
		joke = json.value;
	};
</script>

<main>
	<h1>Click Chuck Norris to hear a joke!</h1>
	<ChuckNorris onClick={getJoke} />
	<SpeechBubble {joke} />
</main>

<style>
	main {
		width: 100%;
		flex: 1;
		background-color: #f6f6f6;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	h1 {
		color: black;
		font-size: 1.25rem;
		margin-top: 40px;
	}
</style>
