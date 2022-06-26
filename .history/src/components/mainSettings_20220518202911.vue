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
	<div class="displaySettingBox" v-if="!isHidden">
		<cycleSettings></cycleSettings>
		<timerSettings></timerSettings>
	</div>
</template>

<script>
import { SettingFilled } from '@ant-design/icons-vue';
import cycleSettings from './cycleSettings';
import timerSettings from './timerSettings';
export default {
	name: 'mainSettings',
	components: {
		SettingFilled,
		cycleSettings,
		timerSettings,
	},
	data() {
		return { isHidden: false };
	},
	watch: {
		'$store.state.buttonStatus': function () {
			// console.log(this.$store.state.buttonStatus);
			if (this.$store.state.buttonStatus === 'running') {
				this.$data.isHidden = true;
			}
            else if(this.$store.state.buttonStatus === 'pause')
            {
                this.$data.isHidden = false;
            }
		},
	},
};
</script>

<style scoped>
.alignRight {
	position: absolute;
	right: 0;
}

</style>
