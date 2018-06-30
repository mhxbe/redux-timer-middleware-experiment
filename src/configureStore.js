import { applyMiddleware, createStore } from 'redux';
import timerMiddleware from 'redux-timer-middleware';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      timerMiddleware,
    )
  )
}
