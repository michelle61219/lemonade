<template>
	<div class="content">
		<Row>
			<Col span="{12}">col-12</Col>
			<Col span="{12}">col-12</Col>
		</Row>
		<col class="cycle_content" span="{12} >
			<h2 class="cycle_title">Cycle Settings</h2>
			<div class="in">
				<h5>IN</h5>
				<a-slider
					v-model:value="$store.state.countIn"
					:min="1"
					:max="30"
					:tooltip-visible="true"
				/>
			</div>
			<div class="hold1">
				<h5>HOLD</h5>
				<a-slider
					v-model:value="$store.state.countHold1"
					:min="0"
					:max="30"
					:tooltip-visible="true"
				/>
			</div>
			<div class="out">
				<h5>OUT</h5>
				<a-slider
					v-model:value="$store.state.countOut"
					:min="1"
					:max="30"
					:tooltip-visible="true"
				/>
			</div>
			<div class="hold2">
				<h5>HOLD</h5>
				<a-slider
					v-model:value="$store.state.countHold2"
					:min="0"
					:max="30"
					:tooltip-visible="true"
				/>
			</div>
		</col>
		<col class="lemon" span="{12}>lemon here!</col>
	</div>
</template>

<script>
export default {
	name: 'cycleSettings',
};
</script>

<style scoped>
.content,
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
	flex-direction: column;
	border: gray 2px solid;
	border-radius: 15px;
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

.ant-slider {
	width: 25%;
}

/* .ant-row {
	width: 400px;
} */
</style>
