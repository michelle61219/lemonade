<template>
	<div class="cycle_section">
		<h2 class="cycle_title">Cycle Settings</h2>
		<div class="cycle_content">
			<div class="in">
				<h5>IN</h5>
				<a-slider
					id="test"
					v-model:value="$store.state.countIn"
					:disabled="disabled"
					max=30
				/>
			</div>
			<div class="hold1">
				<h5>HOLD</h5>
				<a-slider
					id="test"
					v-model:value="$store.state.countHold1"
					:disabled="disabled"
					max=30
				/>
			</div>
			<div class="out">
				<h5>OUT</h5>
				<a-slider
					id="test"
					v-model:value="$store.state.countOut"
					:disabled="disabled"
					max=30
				/>
			</div>
			<div class="hold2">
				<h5>HOLD</h5>
				<a-slider
					id="test"
					v-model:value="$store.state.countHold2"
					:disabled="disabled"
					max=30
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cycleSettings',
};
</script>

<style scoped>
.cycle_section,
.time_section {
	margin: 20px;
}

.cycle_title,
.time_title {
	text-align: center;
	padding: 10px;
}

.cycle_content {
	display: flex;
	justify-content: space-around;
	border: gray 2px solid;
	border-radius: 15px;
	padding-bottom: 10px;
}

.in,
.hold1,
.hold2,
.out {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 20px;
}

.code-box-demo .ant-slider {
	margin-bottom: 16px;
}
</style>
