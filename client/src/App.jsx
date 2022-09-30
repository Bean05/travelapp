import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProtectedRoute from './HOCs/ProtectedRoute';
import { checkAuth } from './redux/actions/userActions';

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
        <Route element={<ProtectedRoute redirect="/todo" isAllowed={!user.id} />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<ProtectedRoute redirect="/signup" isAllowed={!!user.id} />}>
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
