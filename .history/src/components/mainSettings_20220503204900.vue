<template>
	<div class="alignRight">
		<a-button
			class="settingGear"
			type="primary"
			shape="circle"
			size="large"
			v-on:click="isHidden = !isHidden"
		>
			<template #icon><setting-filled /></template>
		</a-button>
	</div>
	<h1 v-if="!isHidden">Show Bg</h1>
</template>

<script>
import { SettingFilled } from '@ant-design/icons-vue';
export default {
	name: 'Timer',
	components: {
		SettingFilled,
	},
	data() {
		return { isHidden: true };
	},
};
</script>

<style scoped>
.alignRight {
	position: absolute;
	right: 0;
}


</style>
