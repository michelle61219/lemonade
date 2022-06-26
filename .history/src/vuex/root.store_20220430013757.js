import { createStore } from 'vuex';

export const store = createStore({
	state() {
		return {
			timerStartMinute: 1,
			buttonStatus: 'pause',
			timerCount: 60,
			timer: null,

			// CycleSettings 4 Inputs
			countIn: 4,
			countHold1: 0,
			countOut: 6,
			countHold2: 0,

			// breathingStates: {
			// 	In: 0,
			// 	Out: 1,
			// },
			// breathingCurrentState: 1,

			buttonClicked: false,
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
			if (state.buttonStatus === 'running') return;
			state.timerStartMinute = val;
			state.timerCount = state.timerStartMinute * 60;
		},

		clickStatusButton(state) {
			if (state.buttonStatus=== 'pause') {
				state.buttonStatus = 'running';
				if (state.timerCount == 0) {
					state.timerCount = state.timerStartMinute * 60;
				}
				state.timer = setInterval(() => {
					state.timerCount--;
					if (state.timerCount <= 0) {
						clearInterval(state.timer);
						state.buttonStatus = 'pause';
					}
					// for test
				}, 1000);
			} else if (state.buttonStatus === 'running') {
				clearInterval(state.timer);
				// Reset to the start minute
				state.timerCount = state.timerStartMinute * 60;
				state.buttonStatus = 'pause';
			}

			state.buttonClicked == true;
			console.log(state.buttonClicked == true;)
		},
		// resetTimer()
		activateBreathingBg(state) {
			if (
				state.timerStartMinute == 0 ||
				state.countIn == 0 ||
				state.countOut == 0
			) {
				alert('Must input numbers > 0 on In, Out, and timer boxes!');
			} else {
				// state.buttonClicked == true;
				// console.log(state.buttonClicked, "from above")
				// if (state.breathingCurrentState === state.breathingStates.In) {
				// 	state.breathingCurrentState = state.breathingStates.Out;
				// 	setTimeout(() => {
				// 		// this.toggleBreath();
				// 		// this.activateBreathingBg(state);
				// 		console.log("hi");
				// 	}, state.countOut + state.countHold2);
				// } else if (state.breathingCurrentState === state.breathingStates.Out) {
				// 	state.breathingCurrentState = state.breathingStates.In;
				// 	setTimeout(() => {
				// 		// this.toggleBreath();
				// 		// this.activateBreathingBg(state);
				// 	}, state.countIn + state.countHold1);
				// }
			}
		},
	},
});
