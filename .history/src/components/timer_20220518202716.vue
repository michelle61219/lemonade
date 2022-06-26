<template>
	<div class="timer">{{ timerCount }}</div>
</template>

<script>
export default {
	name: 'timer',
	computed: {
		timerCount() {
			const minutes = Math.floor(this.$store.state.timerCount / 60);
			const seconds = this.$store.state.timerCount % 60;
			// Displays two digits for minutes and seconds
			const paddedMinutes = minutes.toString().padStart(1, '0');
			const paddedSeconds = seconds.toString().padStart(2, '0');
			return `${paddedMinutes}:${paddedSeconds}`;
		},
	},
};
</script>

<style scoped>
.timer {
	position: absolute;
	bottom: 2%;
	right: 5%;
	font-size: 8em;
	z-index: -1;
}
</style>
