import axios from 'axios';
import { SET_TRIP, SEARCH_TRIP, SET_ONE_INFO } from '../types';
import { allInfo } from './userActions';

export const setAllCards = (payload) => ({ type: SET_TRIP, payload });
export const addSearch = (payload) => ({ type: SEARCH_TRIP, payload });
export const setUpdateUser = (payload) => ({ type: SET_ONE_INFO, payload });

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

export const updateUserCard = (input, id, setModalUpdate) => (dispatch) => {
  axios.put(`/api/v1/updateuser/${id}`, input)
    .then((res) => {
      setModalUpdate(false);
      dispatch(setUpdateUser(res.data));
      dispatch(allInfo(id));
    })
    .catch(console.log);
};
