import { SET_AUTH, LOGOUT } from '../types';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return payload;
    case LOGOUT:
      return {};
    // case SET_USER_INFO:
    //   return payload;
    default:
      return state;
  }
}
