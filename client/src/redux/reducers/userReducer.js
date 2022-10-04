import { SET_AUTH, LOGOUT } from '../types';

export default function userReducer(state = { fetching: true }, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
