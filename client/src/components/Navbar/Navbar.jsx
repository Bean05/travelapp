import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUserAsync } from '../../redux/actions/userActions';

function Navbar() {
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton href="/" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AccountBalanceIcon />
          </IconButton>

          <Button component={NavLink} to="/signup" variant="filled">
            SignUp
          </Button>
          <Button component={NavLink} to="/signin" variant="filled">
            SignIn
          </Button>
          <Button component={NavLink} to="/home" variant="filled">
            Home
          </Button>
          <Button onClick={() => dispatch(logoutUserAsync())} variant="filled">Logout</Button>


        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
