import { ALL_COMMENTS } from '../types';

export default function oneUserInfoReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ALL_COMMENTS:
      return payload;
    default:
      return state;
  }
}
