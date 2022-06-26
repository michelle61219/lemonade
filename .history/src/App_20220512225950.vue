<template>
	<div class="container">
		<mainSettings></mainSettings>
		<!-- <timer></timer> -->
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
</style>
