import { Container } from '@mui/material';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TripCreate from './components/TripCreate';
import UserAccount from './components/UserAccount';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);

  // const user = useSelector((state) => state.user);
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/page" element={<UserAccount />} />
        <Route path="/create" element={<TripCreate />} />

      </Routes>
    </Container>
  );
}

export default App;
