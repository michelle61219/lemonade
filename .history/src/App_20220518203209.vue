<template>
	<div class="container">
		<mainSettings></mainSettings>
		<timer></timer>
	</div>
	<breathingBg></breathingBg>
</template>

<script>
import timer from './components/timer';
import breathingBg from './components/breathingBg';
import mainSettings from './components/mainSettings';

export default {
	name: 'App',
	components: {
		timer,
		breathingBg,
		mainSettings,
	},
};
</script>

<style>
body {
	overflow: hidden;
	margin: 0;
	height: 100%;

	background: rgb(239, 200, 240);
	background: linear-gradient(
		0deg,
		rgba(239, 200, 240, 1) 10%,
		rgba(240, 242, 192, 1) 75%
	);
}
img,
svg {
	vertical-align: initial;
}
.container {
	background: rgba(255, 255, 255);
	margin: 0px 50px 0px 50px;
	border-radius: 15px;
}
</style>
