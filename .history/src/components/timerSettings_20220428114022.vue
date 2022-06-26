<template>
	<div class="time_section">
		<h2 class="time_title">Time Length Settings</h2>
		<div class="time_content">
			<span>
				<!-- @change: change start minute right away -->
				<input
					type="number"
					:value="timerStartMinute"
					min="0"
					:disabled="status !== 'pause'"
					@change="
						this.$store.commit('changeTimerStartMinute', $event.target.value)
					"
				/>
				mins</span
			>
			<a-button type="primary" shape="circle" @click="handleButtonClick"
				>{{ buttonText }}
			</a-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'timeSettings',
	methods: {
		handleButtonClick() {
			// console.log('handleButtonClick');
			this.$store.commit('clickStatusButton');
		},
	},
	computed: {
		timerStartMinute() {
			return this.$store.state.timerStartMinute;
		},
		status() {
			return this.$store.state.status;
		},
		buttonText() {
			return this.$store.state.status === 'pause' ? 'Start' : 'Stop';
		},
	},
};
</script>

<style scoped>
.time_section {
	margin: 20px;
}

.time_title {
	text-align: center;
	padding: 10px;
}

.time_content {
	display: flex;
	justify-content: space-around;
	border: gray 2px solid;
	border-radius: 15px;
	padding: 20px;
}
</style>
