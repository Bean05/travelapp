import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton, Stack } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { useDispatch } from 'react-redux';
// import { signupUser } from '../../redux/actions/userActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
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

    axios.post('/api/users/signup', data)
      .then((res) => setInputs(res.data.path));
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://dalinfotour.ru/uploads/People_Friends__entertainment__recreation_A_trip_to_the_sea_012981_.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Регистрация
            </Typography>
            {/* <Box component="form" noValidate
            onSubmit={(e) => dispatch(signupUser(e,
            Object.fromEntries(new FormData(e.target))))} sx={{ mt: 1 }}> */}
            <Box onSubmit={(e) => submitHandler(e, inputs)} component="form" noValidate sx={{ mt: 1 }}>

              <TextField
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
              />
              <TextField
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
              />
              <TextField
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
              />
              <TextField
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
              />
              <TextField
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
              />
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="photo"
                label="Фото"
                name="photo"
                autoComplete="photo"
                autoFocus
              /> */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  variant="contained"
                  component="label"

                >
                  Аватарка
                  <input
                    hidden
                    accept="image/*"
                    name="photo"
                    multiple
                    type="file"
                    onChange={changeHandlerImg}
                    // onChange={(e) => setImg(e.target.files[0])}
                  />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  {/* <input hidden accept="image/*" type="file" /> */}
                  <PhotoCamera />
                </IconButton>
              </Stack>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Регистрация
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
