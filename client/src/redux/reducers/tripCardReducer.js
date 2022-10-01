import { SET_ALL_CARDS, ADD_CARD } from '../types';

export default function tripCardReducer(state = [], actions) {
  const { type, payload } = actions;
  switch (type) {
    case SET_ALL_CARDS:
      return payload;
    case ADD_CARD:
      return [...state, payload];
    default:
      return state;
  }
}
