<template>
	<div
		class="inhaleExhale_section"
		v-if="$store.state.buttonStatus === 'running'"
	>
		<div
			v-if="currentStatus === breathingStatus.breatheOut"
			class="movingBg breathe-out"
		></div>
		<div v-else>
			<div
				v-if="currentStatus === breathingStatus.breatheIn"
				class="movingBg breathe-in"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'breathingBg',
	data() {
		return {
			breathingStatus: {
				breatheIn: 0,
				breatheOut: 1,
			},
			currentStatus: 1,
		};
	},
	methods: {
		// cycleSettingsValidation() {
		// 	if (
		// 		$store.state.timerStartMinute == 0 ||
		// 		$store.state.countIn == 0 ||
		// 		$store.state.countOut == 0
		// 	) {
		// 		alert('Must input numbers > 0 on In, Out, and timer boxes!');
		// 	}
		// },

		InhaleExhaleBg() {
			if (this.currentStatus === this.breathingStatus.breatheIn) {
				this.currentStatus = this.breathingStatus.breatheOut;
				setTimeout(() => {
					this.InhaleExhaleBg();
					//Moving Down
				}, this.exhaleSeconds + this.holdSecondsTwo);
			}
			// First start in here !!!
			else if (this.currentStatus === this.breathingStatus.breatheOut) {
				this.currentStatus = this.breathingStatus.breatheIn;
				setTimeout(() => {
					this.InhaleExhaleBg();
					//Moving Up
				}, this.inhaleSeconds + this.holdSecondsOne);
			}
		},
	},
	// setTimeout(func, time)
	computed: {
		inhaleSeconds() {
			return this.$store.state.countIn * 1000;
		},
		stringInhaleSec() {
			return this.$store.state.countIn + 's';
		},
		exhaleSeconds() {
			return this.$store.state.countOut * 1000;
		},
		stringExhaleSec() {
			return this.$store.state.countOut + 's';
		},
		holdSecondsOne() {
			return this.$store.state.countHold1 * 1000;
		},
		holdSecondsTwo() {
			return this.$store.state.countHold2 * 1000;
		},
	},
	mounted() {
		this.InhaleExhaleBg();
	},
};
</script>

<style scoped>
.movingBg {
	width: 30vw;
	height: 50vh;
	background: black;
	background: linear-gradient(
		to bottom,
		#e5e5e5 0%,
		#e5e5e5 50%,
		#111111 50%,
		#111111 50%,
		#111111 100%
	);
	background-size: 100% 200%;
	animation-fill-mode: forwards;
}

.breathe-in {
	animation-name: breathe-in;
	animation-duration: v-bind(stringInhaleSec);
	animation-iteration-count: 1;
	animation-direction: normal;
}

.breathe-out {
	background-position: 0% 0%;
	animation-name: breathe-in;
	animation-duration: v-bind(stringInhaleSec);
	animation-iteration-count: 1;
	animation-direction: reverse;
}

@keyframes breathe-in {
	0% {
		background-position: 0% 0%;
	}

	100% {
		background-position: 0% 100%;
	}
}
</style>
