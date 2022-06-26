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
	/* background-color: #fffacd; */
	background: rgb(246, 251, 188);
	background: linear-gradient(
		0deg,
		rgba(246, 251, 188, 1) 16%,
		rgba(251, 233, 248, 1) 79%
	);
}
img,
svg {
	vertical-align: initial;
}
</style>
