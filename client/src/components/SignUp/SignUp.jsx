import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/actions/userActions';
import './style.css';

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    social: '',
    photo: null,
  });

  const changeHandlerImg = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', inputs.name);
    data.append('email', inputs.email);
    data.append('password', inputs.password);
    data.append('phone', inputs.phone);
    data.append('social', inputs.social);
    data.append('photo', inputs.photo);
    if (inputs.name
      && inputs.email
      && inputs.password
      && inputs.phone
      && inputs.social
      && inputs.photo) {
      dispatch(signupUser(e, data, navigate));
    } else { setError(true); }
  };

  return (
    <div className="upback">
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
              className="boxup"
              sx={{
                // backgroundImage: 'url(./signUp.jpeg)',
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundPosition: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Регистрация
              </Typography>
              <Box
                onSubmit={(e) => submitHandler(e, inputs)}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  className="inputup"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Имя"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={inputs.name}
                  onChange={changeHandler}
                  style={{ width: '80%', marginLeft: '10%' }}

                />
                <TextField
                  className="inputup"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Почта"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={inputs.email}
                  onChange={changeHandler}
                  style={{ width: '80%', marginLeft: '10%' }}

                />
                <TextField
                  className="inputup"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={inputs.password}
                  onChange={changeHandler}
                  style={{ width: '80%', marginLeft: '10%' }}

                />
                <TextField
                  className="inputup"
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Телефон"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  value={inputs.phone}
                  onChange={changeHandler}
                  style={{ width: '80%', marginLeft: '10%' }}

                />
                <TextField
                  className="inputup"
                  margin="normal"
                  required
                  fullWidth
                  id="social"
                  label="Соц.Сеть"
                  name="social"
                  autoComplete="social"
                  autoFocus
                  value={inputs.social}
                  onChange={changeHandler}
                  style={{ width: '80%', marginLeft: '10%', mt: 2 }}

                />
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button
                    variant="contained"
                    component="label"
                    style={{ width: '20%', marginLeft: '40%', mt: 2 }}
                  >
                    Аватарка
                    <input
                      hidden
                      accept="image/*"
                      name="photo"
                      multiple
                      type="file"
                      onChange={changeHandlerImg}
                    />
                  </Button>
                </Stack>
                {error && <p style={{ color: 'red', fontSize: '30px' }}>Заполни все поля</p>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    width: '80%', marginLeft: '10%', mt: 3, mb: 2,
                  }}
                >
                  Регистрация
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
