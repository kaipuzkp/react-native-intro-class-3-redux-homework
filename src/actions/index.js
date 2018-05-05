import { ADD_COUNTER } from './types';

export const increaseCounter = (num,rate) =>{
  return {
      type: ADD_COUNTER,
      payload: num,
      tax:rate,
  }
}