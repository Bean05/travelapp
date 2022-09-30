import { SET_USER_INFO } from '../types';

export default function userInfoReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_INFO:
      return payload;

    default:
      return state;
  }
}
