<template>
	<div v-if="!isHidden">
		<cycleSettings></cycleSettings>
		<timerSettings></timerSettings>
	</div>

	
</template>

<script>
import { SettingFilled } from '@ant-design/icons-vue';
import cycleSettings from './cycleSettings';
import timerSettings from './timerSettings';
export default {
	name: 'Timer',
	components: {
		SettingFilled,
		cycleSettings,
		timerSettings,
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
