import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUserAsync } from '../../redux/actions/userActions';

function Navbar() {
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton href="/" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            Friends Trip
          </IconButton>

          <Button component={NavLink} to="/signup" variant="filled">
            Зарегистрироваться
          </Button>
          <Button component={NavLink} to="/signin" variant="filled">
            Войти
          </Button>
          <Button component={NavLink} to="/" variant="filled">
            Создать поездку
          </Button>
          <Button component={NavLink} to="/" variant="filled">
            Найти поездку
          </Button>

          {/* <Button onClick={() => dispatch(logoutUserAsync())}
          variant="filled">Выйти</Button> */}
          <IconButton onClick={() => dispatch(logoutUserAsync())} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;