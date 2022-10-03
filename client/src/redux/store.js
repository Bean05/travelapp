import { configureStore } from '@reduxjs/toolkit';
import searchTripReducer from './reducers/searchCardReduser';
import tripCardReducer from './reducers/tripCardReducer';
import userReducer from './reducers/userReducer';
// import membershipReducer from './reducers/membershipReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    tripCard: tripCardReducer,
    searchTrip: searchTripReducer,
    // membership: membershipReducer,
  },
});
