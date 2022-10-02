import axios from 'axios';
import { ALL_COMMENTS } from '../types';

export const setComments = (payload) => ({ type: ALL_COMMENTS, payload });

export const allUserTrips = (id) => (dispatch) => {
  axios(`/page/${id}/allComents`)
    .then((res) => dispatch(setComments(res.data)))
    .then(console.log())
    .catch(console.log);
};
