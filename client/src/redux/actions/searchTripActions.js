import axios from 'axios';
import { SET_TRIP, SEARCH_TRIP } from '../types';

export const setAllCards = (payload) => ({ type: SET_TRIP, payload });
export const addSearch = (payload) => ({ type: SEARCH_TRIP, payload });

export const setTripFunction = () => (dispatch) => {
  axios.post('/api/v1/trip')
    .then((res) => dispatch(setAllCards(res.data)))
    .catch(console.log);
};

export const searchSetTrip = (input) => (dispatch) => {
  axios.post('/api/v1/search', input)
    .then((res) => dispatch(setAllCards(res.data)))
    .catch(console.log);
};

export const randomSetTrip = () => (dispatch) => {
  axios.post('/api/v1/random')
    .then((res) => dispatch(setAllCards([res.data])))
    .catch(console.log);
};
