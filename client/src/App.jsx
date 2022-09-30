import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import UserAccout from './components/UserAccount';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/useracc" element={<UserAccout />} />
      </Routes>
    </Container>
  );
}

export default App;
