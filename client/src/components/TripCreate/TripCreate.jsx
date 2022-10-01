import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import LocalAirportIcon from '@mui/icons-material/LocalAirport';
// import TrainIcon from '@mui/icons-material/Train';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useDispatch } from 'react-redux';
// import { signinUser } from '../../redux/actions/userActions';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const theme = createTheme();

export default function TripCreate() {
//   const dispatch = useDispatch();
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
            backgroundImage: 'url(https://aif-s3.aif.ru/images/012/023/be828f7a2fb3ba7ae6c51678ac982ff8.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light'
              ? t.palette.grey[50] : t.palette.grey[900]),
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
              <TimeToLeaveIcon />
              {/* <TrainIcon />
              <LocalAirportIcon /> */}
            </Avatar>
            {/* <Avatar>
              <TrainIcon />
            </Avatar> */}
            {/* <Avatar>
              <LocalAirportIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Создать поездку
            </Typography>
            {/* <Box component="form" noValidate onSubmit={(e) =>
                dispatch(signinUser(e, Object.fromEntries(new FormData(e.target))))}
                 sx={{ mt: 1 }}> */}
            <Box component="form" noValidate sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                required
                fullWidth
                id="tripName"
                label="Название поездки"
                name="tripName"
                autoComplete="tripName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="date"
                label=""
                type="date"
                id="date"
                autoComplete="date"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="cityStart"
                label="Город - откуда"
                type="cityStart"
                id="cityStart"
                autoComplete="cityStart"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="cityWhere"
                label="Город - куда"
                type="cityWhere"
                id="cityWhere"
                autoComplete="cityWhere"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="aboutMembers"
                label="Предпочтения"
                type="aboutMembers"
                id="aboutMembers"
                autoComplete="aboutMembers"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="aboutTrip"
                label="Подробнее о поездке"
                type="aboutTrip"
                id="aboutTrip"
                autoComplete="aboutTrip"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="membersCount"
                label="Количество участников"
                type="membersCount"
                id="membersCount"
                autoComplete="membersCount"
                autoFocus
              />
              {/* <input type="file" label="Фото поездки" /> */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                  Фото поездки
                  <input hidden accept="image/*" name="tripPhoto" multiple type="file" />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  {/* <input hidden accept="image/*" type="file" /> */}
                  <PhotoCamera />
                </IconButton>
              </Stack>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="tripPhoto"
                label="Фото поездки"
                type="tripPhoto"
                id="tripPhoto"
                autoComplete="tripPhoto"
                autoFocus
              /> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Поехали!
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
