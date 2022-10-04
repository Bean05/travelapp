import axios from 'axios';
import { SET_ALL_CARDS, ADD_CARD } from '../types';

export const setAllCards = (payload) => ({ type: SET_ALL_CARDS, payload });
export const addCard = (payload) => ({ type: ADD_CARD, payload });

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
// export const upDateCard = (input, tripId) => (dispatch) => {
//   axios.patch('/api/trip/update', { input, tripId })
//     .then((res) => {
//       dispatch(addCard(res.data));
//     })
//     .then(console.log)
//     .catch(console.log);
// };
