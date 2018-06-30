import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import timerMiddleware from 'redux-timer-middleware';
import rootReducer from './reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(
        thunkMiddleware,
        timerMiddleware,
      )
    )
  )
}
