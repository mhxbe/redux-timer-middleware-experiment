import { START_TIMER, STOP_TIMER } from 'redux-timer-middleware';

const TIMER_PERIOD = 5;

export const startTimer = (timerId, duration) => ({
  type: START_TIMER,
  payload: {
    actionName: 'START_SOME_TIMER',
    actionPayload: { 
      john: 'doe',
    },
    timerName: timerId,
    timerPeriod: TIMER_PERIOD,
  }
})

export const stopTimer = timerId => ({
  type: STOP_TIMER,
  payload: {
    timerName: timerId,
  }
});

const initialState = {
  initial: 'state',
  duration: 0,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'START_SOME_TIMER':
      return {
        ...state,
        duration: state.duration + 1,
      }

    case 'STOP_SOME_TIMER':
      return state;

    default:
      return state;
  }
}