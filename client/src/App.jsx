import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TripCreate from './components/TripCreate';
import UserAccount from './components/UserAccountComponent/UserAccount';
import { checkAuth } from './redux/actions/userActions';
import ProtectedRoute from './HOCs/ProtectedRoute';
import UserPage from './components/UserPageComponent/UserPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const user = useSelector((state) => state.user);
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute redirect="/" isAllowed={!user.id} />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<ProtectedRoute redirect="/signup" isAllowed={!!user.id} />}>
          <Route path="/search" element={<Search />} />
          <Route path="/page/:id" element={<UserPage />} />
          <Route path="/create" element={<TripCreate />} />
          <Route path="/user/:id" element={<UserAccount />} />
        </Route>

      </Routes>
    </Container>
  );
}

export default App;
