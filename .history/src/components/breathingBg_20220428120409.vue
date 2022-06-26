<template>
	<div class="inhaleExhale_section">
		<div v-if="state === states.OUT" class="movingBg breathe-out"></div>
		<div v-else>
			<div v-if="state === states.IN" class="movingBg breathe-in"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'breathingBg',
	data() {
		return {
			states: {
				IN: 0,
				OUT: 1,
			},
			state: 1,
		};
	},
	methods: {
		breatheIn() {
			this.state = this.states.IN;
		},
		breatheOut() {
			this.state = this.states.OUT;
		},
		toggleBreath() {
			console.log(this.state);
			if (this.state === this.states.IN) {
				this.state = this.states.OUT;
				setTimeout(() => {
					this.toggleBreath();
				}, this.outSec + this.holdDuration);
			} else if (this.state === this.states.OUT) {
				this.state = this.states.IN;
				setTimeout(() => {
					this.toggleBreath();
				}, this.inhaleSeconds + this.);
			}
		},
	},

	computed: {
		inhaleSeconds() {
			return this.$store.state.countIn * 1000;
		},
		InSec() {
			return this.$store.state.countIn + 's';
		},
		outSec() {
			return this.$store.state.countOut * 1000;
		},

		OutSec() {
			return this.$store.state.countOut + 's';
		},
		holdSecondsTwo() {
			return this.$store.state.countHold2 * 1000;
		},
		holdDuration() {
			return this.$store.state.countHold1 * 1000;
		},
	},
	mounted() {
		this.toggleBreath();
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
	animation-duration: v-bind(InSec);
	animation-iteration-count: 1;
	animation-direction: normal;
}

.breathe-out {
	background-position: 0% 0%;
	animation-name: breathe-in;
	animation-duration: v-bind(OutSec);
	animation-iteration-count: 1;
	animation-direction: reverse;
}

@keyframes breathe-in {
	0% {
		background-position: 0% 0%;
	}

	/* 70% {
		background-position: 0% 40%;
	} */

	100% {
		background-position: 0% 100%;
	}
}
</style>
