import { SET_ONE_INFO } from '../types';

export default function oneUserInfoReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ONE_INFO:
      return payload;
    default:
      return state;
  }
}
