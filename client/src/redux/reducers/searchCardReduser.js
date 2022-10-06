import {
  SEARCH_TRIP, SET_TRIP, UPDATE_USER,
} from '../types';

export default function searchTripReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TRIP:
      return [...state, payload];
    case SET_TRIP:
      return payload;
    case UPDATE_USER:
      return state.map((user) => (user.id === payload.id ? payload : user));
    default:
      return state;
  }
}
