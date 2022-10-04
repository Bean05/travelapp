import axios from 'axios';
import { ALL_USER_TRIPS } from '../types';

export const setTrips = (payload) => ({ type: ALL_USER_TRIPS, payload });

export const allUserTrips = (id) => (dispatch) => {
  axios(`/api/userinfo/alltripsuser/${id}`)
    .then((res) => dispatch(setTrips(res.data)))
    .catch(console.log);
};
