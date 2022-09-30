import axios from 'axios';
import { SET_USER_INFO } from '../types';

export const setInfo = (payload) => ({ type: SET_USER_INFO, payload });

export const allInfo = () => (dispatch) => {
  axios('api/user/info')
    .then((res) => dispatch(setInfo(res.data)))
    .catch(console.log);
};
