import { configureStore } from '@reduxjs/toolkit';
import tripCardReducer from './reducers/tripCardReducer';
import userReducer from './reducers/userReducer';
// import membershipReducer from './reducers/membershipReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    tripCard: tripCardReducer,
    // membership: membershipReducer,

  },
});
