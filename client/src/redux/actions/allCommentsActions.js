import axios from 'axios';
import { ALL_COMMENTS, ADD_COMMENT } from '../types';

export const setComments = (payload) => ({ type: ALL_COMMENTS, payload });
export const addComments = (payload) => ({ type: ADD_COMMENT, payload });

export const setAllComments = (id) => (dispatch) => {
  axios(`/api/userinfo/allcoments/${id}`)
    .then((res) => dispatch(setComments(res.data)))
    .then(console.log());
};

export const submitMessage = (e, input, setInput, id) => (dispatch) => {
  e.preventDefault();
  axios.post(`/api/userinfo/newcoment/${id}`, input)
    .then((res) => {
      dispatch(addComments(res.data));
      setInput('');
    })
    .catch(console.log);
};
