import { ADD_COUNTER } from './types';

export const increaseCounter = () => {
  return {
    type: ADD_COUNTER,
    payload: 1
  }
}