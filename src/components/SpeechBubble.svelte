<script>
	import 'animate.css';

	export let joke = '';
</script>

{#key joke}
	<div class="animate__animated animate__headShake">
		{joke || 'Hello, let me tell you a joke...'}
	</div>
{/key}

<style>
	div {
		font-size: 1.1em;
		color: #fff;
		background: #264653;
		position: relative;
		padding: 20px;
		border-radius: 10px;
		margin: 50px auto;
		max-width: 320px;
		position: absolute;
		bottom: 100px;
	}

	div::after {
		content: '';
		border: 20px solid transparent;
		position: absolute;

		border-bottom-color: #264653;
		border-top: 0;
		top: -20px;
		left: 50%;
		margin-left: -20px;
	}
</style>
