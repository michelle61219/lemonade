<template>
	<div class="container">
		<cycleSettings></cycleSettings>
		<timeSettings></timeSettings>
		<timer></timer>
	</div>
	<!-- <mainSettings></mainSettings>  -->
	<inhaleExhaleBg></inhaleExhaleBg>
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
		CycleSettings,
		TimeSettings,
		Timer,
		// mainSettings,
		inhaleExhaleBg,
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
