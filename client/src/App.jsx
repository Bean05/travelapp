import React from 'react';
import Search from './components/Search';
import SignIn from './components/UserAccount/SignIn';
import SignUp from './components/UserAccount/SignUp';

function App() {
  return (
    <Container>
    <Navbar />
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Container>
  );
}

export default App;
