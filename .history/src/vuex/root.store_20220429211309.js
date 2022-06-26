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

			states: {
				In: 0,
				Out: 1,
			},
			state: 1,
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
				console.log('timer:', state.timer);
			} else if (state.status === 'running') {
				clearInterval(state.timer);
				// Reset to the start minute
				state.timerCount = state.timerStartMinute * 60;
				state.status = 'pause';
			}
		},
		// resetTimer()
		activateBreathingBg(state) {
			if (state === this.states.In) {
				state = this.states.Out;
				setTimeout(() => {
					this.toggleBreath();
				}, this.countIn + this.hold2);
			} else if (state === states.Out) {
				state = states.In;
				setTimeout(() => {
					this.toggleBreath();
				}, this.countOut + this.hold1);
			}
		},
	},
});
