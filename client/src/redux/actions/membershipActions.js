import axios from 'axios';
import { SET_ALL_MEMBERS } from '../types';

export const setAllMembers = (payload) => ({ type: SET_ALL_MEMBERS, payload });

export const setAllMembersAsync = () => (dispatch) => {
  axios('/api/membership')
    .then((res) => dispatch(setAllMembers(res.data)))
    .catch(console.log);
};

// export const oneUserMembersAsync = (id) => (dispatch) => {
//   axios(`/api/membership/${id}`)
//     .then((res) => dispatch(setAllMembers(res.data)))
//     .catch(console.log);
// };

