import axios from 'axios';
import { ALL_COMMENTS, ADD_COMMENT } from '../types';

export const setComments = (payload) => ({ type: ALL_COMMENTS, payload });
export const addComments = (payload) => ({ type: ADD_COMMENT, payload });

export const allUserTrips = (id) => (dispatch) => {
  axios(`/page/${id}/allComents`)
    .then((res) => dispatch(setComments(res.data)))
    .then(console.log());
};

export const setAllComments = (id) => (dispatch) => {
  axios(`/api/userinfo/allcoments/${id}`)
    .then((res) => dispatch(setComments(res.data)))
    // .then(console.log)
    .catch(console.log);
};

export const submitMessage = (e, inputs, setInput, id) => (dispatch) => {
  e.preventDefault();
  axios.post(`/api/userinfo/allcoments/${id}`, { inputs })
    .then((res) => {
      dispatch(addComments(res.data));
      setInput('');
    })
    .catch(console.log);
};
