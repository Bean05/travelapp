import { configureStore } from '@reduxjs/toolkit';
import searchTripReducer from './reducers/searchCardReduser';
import tripCardReducer from './reducers/tripCardReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    tripCard: tripCardReducer,
    searchTrip: searchTripReducer,
  },
});
