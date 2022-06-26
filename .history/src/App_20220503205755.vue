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
	background-color: #fffacd;
}

img,
svg {
	vertical-align: initial;
}
</style>
