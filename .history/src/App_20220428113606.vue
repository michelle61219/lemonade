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
import timer from './components/Timer';
// import mainSettings from './components/mainSettings';
import inhaleExhaleBg from './components/inhaleExhaleBg';

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
