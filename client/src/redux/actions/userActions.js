import axios from 'axios';
import { SET_AUTH, LOGOUT, SET_USER_INFO } from '../types';

export const setAuthUser = (payload) => ({ type: SET_AUTH, payload });
export const logoutUser = () => ({ type: LOGOUT });

export const setInfo = (payload) => ({ type: SET_USER_INFO, payload });

export const checkAuth = () => (dispatch) => {
  axios.post('/api/users/check', { withCredentials: true })
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const signinUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/users/signin', inputs)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const signupUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/users/signup', inputs)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const logoutUserAsync = () => (dispatch) => {
  axios('/api/users/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};

export const allInfo = () => (dispatch) => {
  axios('api/users/page/:id')
    .then((res) => dispatch(setInfo(res.data)))
    .catch(console.log);
};
