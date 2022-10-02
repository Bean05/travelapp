import { configureStore } from '@reduxjs/toolkit';
import tripCardReducer from './reducers/tripCardReducer';
import userReducer from './reducers/userReducer';
import oneUserInfoReducer from './reducers/oneUserInfoReducer';
import allUserTripsReducer from './reducers/oneUserTripsReduser';
import allCommentsReducer from './reducers/allCommentsReducer';
// import membershipReducer from './reducers/membershipReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    tripCard: tripCardReducer,
    oneUserInfo: oneUserInfoReducer,
    oneUserTrips: allUserTripsReducer,
    allComments: allCommentsReducer,
    // membership: membershipReducer,

  },
});
