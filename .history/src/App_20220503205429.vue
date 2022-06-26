<template>
	<div class="container">
		<mainSettings>
			

		</mainSettings>
		
		<timer></timer>
	</div>
	<breathingBg></breathingBg>
</template>

<script>
import cycleSettings from './components/cycleSettings';
import timerSettings from './components/timerSettings';
import timer from './components/timer';
import breathingBg from './components/breathingBg';
import mainSettings from './components/mainSettings';

export default {
	name: 'App',
	components: {
		cycleSettings,
		timerSettings,
		timer,
		breathingBg,
		mainSettings,
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
