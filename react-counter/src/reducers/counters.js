import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  DECREMENT,
  INCREMENT,
} from '../constants/countersActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [...state, 0];

    case REMOVE_COUNTER:
      return state.filter((_, index) => index !== action.index);

    case INCREMENT:
      return state.map((item, index) => (
        index === action.index
          ? item + 1
          : item
      ));

    case DECREMENT:
      return state.map((item, index) => (
        index === action.index
          ? item - 1
          : item
      ));

    default: return state;
  }
};
