<template>
	<div class="container">
		<cycleSettings></cycleSettings>
		<timerSettings></timerSettings>
		<timer></timer>
	</div>
	<breathingBg></breathingBg>
	<!-- <mainSettings></mainSettings>  -->
</template>

<script>
import cycleSettings from './components/cycleSettings';
import timeSettings from './components/timerSettings';
import timer from './components/timer';
import breathingBg from './components/breathingBg';
// import mainSettings from './components/mainSettings';

export default {
	name: 'App',
	components: {
		cycleSettings,
		timeSettings,
		timer,
		breathingBg,
		// mainSettings,
	},
};
</script>

<style>
body {
	background-color: #fffacd;
}

img,
svg {
	vertical-align: initial;
}
</style>
