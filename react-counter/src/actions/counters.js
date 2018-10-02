import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  DECREMENT,
  INCREMENT,
} from '../constants/countersActionTypes';

export const add = () => ({ type: ADD_COUNTER });
export const remove = index => ({ type: REMOVE_COUNTER, index });
export const decrement = index => ({ type: DECREMENT, index });
export const increment = index => ({ type: INCREMENT, index });
