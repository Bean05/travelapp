import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './tripCreate.css';

const theme = createTheme();

export default function TripCreate() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    tripName: '',
    date: '',
    cityStart: '',
    cityWhere: '',
    aboutMembers: '',
    aboutTrip: '',
    membersCount: '',
    tripPhoto: null,
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
    data.append('tripPhoto', inputs.tripPhoto);
    data.append('tripName', inputs.tripName);
    data.append('date', inputs.date);
    data.append('cityStart', inputs.cityStart);
    data.append('cityWhere', inputs.cityWhere);
    data.append('aboutMembers', inputs.aboutMembers);
    data.append('aboutTrip', inputs.aboutTrip);
    data.append('membersCount', inputs.membersCount);
    if (inputs.tripPhoto
  && inputs.tripName
  && inputs.date
  && inputs.cityStart
  && inputs.cityWhere
  && inputs.aboutMembers
  && inputs.aboutTrip
  && inputs.membersCount) {
      axios.post('/api/trip/create', data)
        .then((res) => setInputs(res.data.path))
        .then(navigate('/'));
    } else { setError(true); }
  };
  return (
    <div className="tripcreate">
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
              className="boxtripcreate"
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
              </Avatar>
              <Typography component="h1" variant="h5">
                Создать поездку
              </Typography>
              <Box
                onSubmit={(e) => submitHandler(e, inputs)}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  className="inputtripcreate"
                  margin="normal"
                  required
                  fullWidth
                  id="tripName"
                  label="Название поездки"
                  name="tripName"
                  autoComplete="tripName"
                  autoFocus
                  value={inputs.tripName}
                  onChange={changeHandler}
                />
                <TextField
                  className="inputtripcreate"
                  margin="normal"
                  required
                  fullWidth
                  name="date"
                  label=""
                  type="date"
                  id="date"
                  autoComplete="date"
                  autoFocus
                  value={inputs.date}
                  onChange={changeHandler}
                />
                <TextField
                  className="inputtripcreate"
                  margin="normal"
                  required
                  fullWidth
                  name="cityStart"
                  label="Город - откуда"
                  type="cityStart"
                  id="cityStart"
                  autoComplete="cityStart"
                  autoFocus
                  value={inputs.cityStart}
                  onChange={changeHandler}
                />
                <TextField
                  className="inputtripcreate"
                  margin="normal"
                  required
                  fullWidth
                  name="cityWhere"
                  label="Город - куда"
                  type="cityWhere"
                  id="cityWhere"
                  autoComplete="cityWhere"
                  autoFocus
                  value={inputs.cityWhere}
                  onChange={changeHandler}
                />
                <TextField
                  className="inputtripcreate"
                  margin="normal"
                  required
                  fullWidth
                  name="aboutMembers"
                  label="С кем хотелось бы в путь"
                  type="aboutMembers"
                  id="aboutMembers"
                  autoComplete="aboutMembers"
                  autoFocus
                  value={inputs.aboutMembers}
                  onChange={changeHandler}
                />
                <TextField
                  className="inputtripcreate"
                  margin="normal"
                  required
                  fullWidth
                  name="aboutTrip"
                  label="Подробнее о поездке"
                  type="aboutTrip"
                  id="aboutTrip"
                  autoComplete="aboutTrip"
                  autoFocus
                  value={inputs.aboutTrip}
                  onChange={changeHandler}
                />
                <TextField
                  className="inputtripcreate"
                  margin="normal"
                  required
                  fullWidth
                  name="membersCount"
                  label="Количество участников"
                  type="membersCount"
                  id="membersCount"
                  autoComplete="membersCount"
                  autoFocus
                  value={inputs.membersCount}
                  onChange={changeHandler}
                />
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button
                    variant="contained"
                    component="label"
                  >
                    Фото поездки
                    <input
                      hidden
                      accept="image/*"
                      name="tripPhoto"
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
                  sx={{ mt: 3, mb: 2 }}
                >
                  Поехали!
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
