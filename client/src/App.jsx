import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserAccount from './components/UserAccount';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/page" element={<UserAccount />} />

      </Routes>
    </Container>
  );
}

export default App;
