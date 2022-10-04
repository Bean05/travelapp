import axios from 'axios';
import { SET_ALL_CARDS, ADD_CARD, ADD_MEMBER } from '../types';

export const setAllCards = (payload) => ({ type: SET_ALL_CARDS, payload });
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const addMember = (payload) => ({ type: ADD_MEMBER, payload });

export const setAllCardsAsync = () => (dispatch) => {
  axios('/api/trip/allcards')
    .then((res) => dispatch(setAllCards(res.data)))
    .catch(console.log);
};

export const addCardAsync = (input) => (dispatch) => {
  axios.post('/api/trip/create', { input })
    .then((res) => {
      dispatch(addCard(res.data));
    })
    .catch(console.log);
};
export const upDateCard = (input) => (dispatch) => {
  axios.patch('/api/trip/update', { input })
    .then((res) => {
      dispatch(addCard(res.data));
    })
    .catch(console.log);
};

export const addMemberAsync = (id) => (dispatch) => {
  axios.patch(`/api/trip/newmember/${id}`)
    .then((res) => {
      dispatch(addMember(res.data));
    })
    .catch(console.log);
};
