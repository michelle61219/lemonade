<template>
	<div class="container">
		<CycleSettings></CycleSettings>
		<TimeSettings></TimeSettings>
		<Timer></Timer>
	</div>
	<!-- <mainSettings></mainSettings>  -->
	<inhaleExhaleBg></inhaleExhaleBg>
</template>

<script>
import cycleSettings from './components/CycleSettings';
import timeSettings from './components/TimeSettings';
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
