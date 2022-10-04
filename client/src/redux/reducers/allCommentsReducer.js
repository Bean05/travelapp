import { ALL_COMMENTS, ADD_COMMENT } from '../types';

export default function allCommentsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ALL_COMMENTS:
      return payload;
    case ADD_COMMENT:
      return [...state, payload];
    default:
      return state;
  }
}
