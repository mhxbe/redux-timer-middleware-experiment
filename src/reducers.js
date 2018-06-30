import { START_TIMER, STOP_TIMER } from 'redux-timer-middleware';

export default rootReducer = (state, action) => {
  switch(action.type) {
    case START_TIMER:
      console.log('START timer');
      return state;

    case STOP_TIMER:
      console.log('STOP timer');
      return state;

    default:
      return state;
  }
}