import axios from 'axios';
import { SET_ONE_INFO } from '../types';

export const setInfo = (payload) => ({ type: SET_ONE_INFO, payload });

export const oneUser = (id) => (dispatch) => {
  axios(`/api/userinfo/page/${id}`)
    .then((res) => dispatch(setInfo(res.data)))
    .catch(console.log);
};
