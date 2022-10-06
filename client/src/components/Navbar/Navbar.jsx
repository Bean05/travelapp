import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { indigo } from '@mui/material/colors';
import { logoutUserAsync } from '../../redux/actions/userActions';
import '../../main.css';

function Navbar() {
  const color = indigo[900];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div className="myNavbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ zIndex: 1200, height: 80, backgroundColor: color }}>
          <Toolbar sx={{
            my: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          >
            <IconButton
              href="/"
              edge="start"
              color="inherit"
              variant="outlined"
              aria-label="outlined button group"
              sx={{ position: 'fixed', left: '1rem' }}
            >
              Travel App
            </IconButton>
            {user.id
              ? (
                <Box id="boxNav">
                  <Button component={NavLink} to="/create" variant="filled">
                    <p style={{ fontSize: '20px', paddingTop: '14px' }}>Создать поездку</p>
                  </Button>
                  <Button component={NavLink} to="/search" variant="filled">
                    <p style={{ fontSize: '20px', paddingTop: '14px' }}>Найти поездку</p>
                  </Button>
                  <Button component={NavLink} to={`/user/${user.id}`} variant="filled">
                    <p style={{ fontSize: '20px', paddingTop: '14px' }}>Личная страница</p>
                  </Button>
                  <IconButton onClick={() => dispatch(logoutUserAsync())} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <LogoutIcon />
                  </IconButton>
                </Box>

              ) : (
                <Box>
                  <Button component={NavLink} to="/signup" variant="filled">
                    <p style={{ fontSize: '20px', paddingTop: '14px' }}>Зарегистрироваться</p>
                  </Button>
                  <Button component={NavLink} to="/signin" variant="filled">
                    <p style={{ fontSize: '20px', paddingTop: '14px' }}>Войти</p>
                  </Button>
                </Box>
              )}
            <NavLink
              to="/"
              style={{
                borderRadius: '50%', height: '55px', position: 'absolute', right: '15px',
              }}
            >
              <img
                src="/logo2.png"
                alt="logo"
                style={{
                  borderRadius: '50%', height: '60px',
                }}
              />
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
