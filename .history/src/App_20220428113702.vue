<template>
	<div class="container">
		<cycleSettings></cycleSettings>
		<timeSettings></timeSettings>
		<timer></timer>
	</div>
	<!-- <mainSettings></mainSettings>  -->
	<breathingBg></breathingBg>
</template>

<script>
import cycleSettings from './components/cycleSettings';
import timeSettings from './components/timeSettings';
import timer from './components/timer';
// import mainSettings from './components/mainSettings';
import breathingBg from './components/breathingBg';

export default {
	name: 'App',
	components: {
		cycleSettings,
		timeSettings,
		timer,
		// mainSettings,
		breathingBg,
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
