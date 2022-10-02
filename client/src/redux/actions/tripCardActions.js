import axios from 'axios';
import { SET_ALL_CARDS } from '../types';

export const setAllCards = (payload) => ({ type: SET_ALL_CARDS, payload });

export const setAllCardsAsync = () => (dispatch) => {
  axios('/api/trip/allcards')
    .then((res) => dispatch(setAllCards(res.data)))
    .catch(console.log);
};
