<script>
	export let onClick = () => {};
</script>

<img
	on:click={onClick}
	src="https://www.seekpng.com/png/detail/110-1104356_chuck-norris-wall-sticker-chuck-norris-png.png"
	alt="Chuck Norris"
/>

<style>
	img {
		width: 375px;
		height: 250px;
		cursor: pointer;
		transition: transform 1s;
		margin-top: 15px;
	}

	img:hover {
		transform: scale(1.1);
	}
</style>
