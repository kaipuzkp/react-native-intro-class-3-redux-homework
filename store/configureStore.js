import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { createLogger } from 'redux-logger';

import counters from '../reducers/counter';

const loggerMiddleWare = createLogger();
const reducers = combineReducers({
  counters 
});

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleWare)(createStore);


const configureStore = () => {
  const store = createStoreWithMiddleware(reducers);
  return store;
};

export default configureStore;