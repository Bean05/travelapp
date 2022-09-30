import { SET_ALL_CARDS } from '../types';

export default function tripCardReducer(state = [], actions) {
  const { type, payload } = actions;
  switch (type) {
    case SET_ALL_CARDS:
      return payload;
    default:
      return state;
  }
}
