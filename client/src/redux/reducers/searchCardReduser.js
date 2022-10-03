import {
  SEARCH_TRIP, SET_TRIP,
} from '../types';

export default function searchTripReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TRIP:
      return [...state, payload];
    case SET_TRIP:
      return payload;
    default:
      return state;
  }
}
