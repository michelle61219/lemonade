<template>
	<div class="cycle_section">
		<a-slider
			id="test"
			v-model:value="$store.state.countIn"
			:disabled="disabled"
			max="30"
		/>
			<a-slider
			id="test"
			v-model:value="$store.state.countHold1"
			:disabled="disabled"
			max="30"
		/>
			<a-slider
			id="test"
			v-model:value="$store.state.countOut"
			:disabled="disabled"
			max="30"
		/>
			<a-slider
			id="test"
			v-model:value="$store.state.countHold2"
			:disabled="disabled"
			max="30"
		/>
		<h2 class="cycle_title">Cycle Settings</h2>
		<div class="cycle_content">
			<div class="in">
				<h5>IN</h5>

				
			</div>
			<div class="hold1">
				<h5>HOLD</h5>
				<button class="add" @click="countHold1++">+</button>
				<h2>{{ countHold1 }}</h2>
				<button class="sub" :disabled="countHold1 <= 0" @click="countHold1--">
					-
				</button>
			</div>
			<div class="out">
				<h5>OUT</h5>
				<button class="add" @click="countOut++">+</button>
				<h2>{{ countOut }}</h2>
				<button class="sub" :disabled="countOut <= 0" @click="countOut--">
					-
				</button>
			</div>
			<div class="hold2">
				<h5>HOLD</h5>
				<button class="add" @click="countHold2++">+</button>
				<h2>{{ countHold2 }}</h2>
				<button class="sub" :disabled="countHold2 <= 0" @click="countHold2--">
					-
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CycleSettings',
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
