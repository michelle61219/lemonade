import { createStore } from 'vuex';

export const store = createStore({
	state() {
		return {
			timerStartMinute: 1,
			status: 'pause',
			timerCount: 60,
			timer: null,

			// CycleSettings 4 Inputs
			countIn: 4,
			countHold1: 0,
			countOut: 6,
			countHold2: 0,
		};
	},

	actions: {
		dispatchTEST: (state, val) => {
			state.commit('changeTimerStartMinute', val);
			state.commit('clickStatusButton');
			state.commit('activateBreathingBg');
		},
	},
	mutations: {
		changeTimerStartMinute(state, val) {
			if (state.status === 'running') return;
			state.timerStartMinute = val;
			state.timerCount = state.timerStartMinute * 60;
		},

		clickStatusButton(state) {
			// if(4inputs !> 0){
			// 	alert("need to set seconds");
			// }
			//else{}
			if (state.status === 'pause') {
				state.status = 'running';
				if (state.timerCount == 0) {
					state.timerCount = state.timerStartMinute * 60;
				}
				state.timer = setInterval(() => {
					state.timerCount--;
					if (state.timerCount <= 0) {
						clearInterval(state.timer);
						state.status = 'pause';
					}
					// for test
				}, 100);
			} else if (state.status === 'running') {
				clearInterval(state.timer);
				// Reset to the start minute
				state.timerCount = state.timerStartMinute * 60;
				state.status = 'pause';
			}
		},
		// resetTimer()
		activateBreathingBg(state) {
			console.log('hi');
			// if (
			// 	state.timerStartMinute == 0 &&
			// 	state.countIn == 0 &&
			// 	state.countOut == 0 &&
			// 	state.countHold1 == 0 &&
			// 	state.countHold2 == 0
			// ) {
			// 	alert('Please enter valid numbers > 0 into input boxes !');
			// }

			if(state.timerStartMinute == 0 || state.countIn == 0 || state.countOut == 0){
				alert('Please enter valid numbers > 0 into input boxes !');
			}
		},
	},
});
