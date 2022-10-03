import { ALL_USER_TRIPS } from '../types';

export default function allUserTripsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ALL_USER_TRIPS:
      return payload;
    default:
      return state;
  }
}
