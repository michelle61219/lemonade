<template>
	<div
		class="inhaleExhale_section"
		v-if="$store.state.buttonStatus === 'running'"
	>
		<div
			v-if="currentStatus === breathingStatus.breatheOut"
			class="movingBg breathe-out"
		>
			breathout
		</div>
		<div v-else>
			<div
				v-if="currentStatus === breathingStatus.breatheIn"
				class="movingBg breathe-in"
				id="animated"
			>
				breathin
			</div>
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
			animeTimer: null,
		};
	},
	methods: {
		InhaleExhaleBg() {
			if (this.currentStatus === this.breathingStatus.breatheIn) {
				this.currentStatus = this.breathingStatus.breatheOut;
				this.animeTimer = setTimeout(() => {
					this.InhaleExhaleBg();
					//Moving Down
				}, this.exhaleSeconds + this.holdSecondsTwo);
			}
			// First start in here !!!
			else if (this.currentStatus === this.breathingStatus.breatheOut) {
				this.currentStatus = this.breathingStatus.breatheIn;
				this.animeTimer = setTimeout(() => {
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
	watch: {
		'$store.state.buttonStatus': function () {
			console.log(this.$store.state.buttonStatus);
			if (this.$store.state.buttonStatus === 'pause') {
				var el = document.getElementById('animated');
				if (!el) {
					el.style.animation = 'none';
					el.offsetHeight; /* trigger reflow */
					el.style.animation = null;
				}

				this.$data.currentStatus = 1;
				clearTimeout(this.$data.animeTimer);
			} else if (this.$store.state.buttonStatus === 'running') {
				this.InhaleExhaleBg();
			}
		},
	},
};
</script>

<style scoped>
.movingBg {
	width: 100vw;
	height: 100vh;
	/* background: black; */
	background: linear-gradient(
		to bottom,
		#e5e5e5 0%,
		#e5e5e5 50%,
		#ffff39 50%,
		#ffff39 50%,
		#ffff39 100%
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
	animation-duration: v-bind(stringExhaleSec);
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
