<template>
	<a-row class="time_section">
		<col class="time_content"  :span="6">
			<h2 class="time_title">Time Length Settings</h2>
			<a-space>
				<a-input-number
					v-model:value="$store.state.timerStartMinute"
					:min="1"
					:max="60"
					:disabled="status !== 'pause'"
					@change="
						this.$store.commit('changeTimerStartMinute', $event.target.value)
					"
				/>
				<span>mins</span>
				<a-button type="primary" shape="circle" @click="handleButtonClick">{{
					buttonText
				}}</a-button>
			</a-space>
		</col>
	</a-row>
</template>

<script>
export default {
	name: 'timeSettings',
	methods: {
		handleButtonClick() {
			this.$store.commit('clickStatusButton');
		},
	},
	computed: {
		timerStartMinute() {
			return this.$store.state.timerStartMinute;
		},
		status() {
			return this.$store.state.buttonStatus;
		},
		buttonText() {
			return this.$store.state.buttonStatus === 'pause' ? 'Start' : 'Stop';
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
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	flex-direction: column;
	align-items: center;
}
</style>
