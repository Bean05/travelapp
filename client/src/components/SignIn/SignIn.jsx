import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { signinUser } from '../../redux/actions/userActions';
import './signIn.css';

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  return (
    <div className="inback">
      <ThemeProvider theme={theme}>
        <Grid
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          container
          component="main"
          sx={{ height: '100vh' }}
        >
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            elevation={6}
            square
            container
          >
            <Box
              className="boxin"
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundPosition: 'center',
                marginBottom: '40%',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginLeft: '35%' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" style={{ marginLeft: '35%' }}>
                Авторизация
              </Typography>
              <Box component="form" noValidate onSubmit={(e) => dispatch(signinUser(e, Object.fromEntries(new FormData(e.target))))} sx={{ mt: 1 }}>
                <TextField
                  className="inputin"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Почта"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ width: '80%', marginLeft: '28%' }}
                />
                <TextField
                  className="inputin"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  style={{ width: '80%', marginLeft: '28%', mt: 2 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    width: '80%', marginLeft: '28%', mt: 3, mb: 2,
                  }}
                >
                  Авторизация
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
