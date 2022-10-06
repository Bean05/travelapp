import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { signinUser } from '../../redux/actions/userActions';
import './style.css';

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  // const [error, setError] = useState(false);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const inputs = Object.fromEntries(new FormData(e.target));
  //   if (Object.values(inputs).every((str) => str.length)) {
  //     dispatch(signinUser(e, inputs, setError));
  //   } else {
  //     setError(true);
  //   }
  // };
  // console.log('Error state:', error);

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
          {/* <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(http://st.gde-fon.com/wallpapers_original/499249_noch_more_luna_bereg_pejzazh_3872x2592_www.Gde-Fon.com.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => (t.palette.mode === 'light'
                ? t.palette.grey[50] : t.palette.grey[900]),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          /> */}
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            // component={Paper}
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
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Авторизация
              </Typography>
              <Box component="form" autoComplete="off" noValidate onSubmit={(e) => dispatch(signinUser(e, Object.fromEntries(new FormData(e.target))))} sx={{ mt: 1 }}>
                <TextField
                  className="inputin"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Почта"
                  name="email"
                  // autoComplete="email"
                  autoFocus
                  style={{ width: '80%', marginLeft: '10%', mt: 2 }}
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
                  // autoComplete="current-password"
                  style={{ width: '80%', marginLeft: '10%', mt: 2 }}
                />
                {/* {error && <p>Заполни все поля</p>} */}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    width: '80%', marginLeft: '10%', mt: 3, mb: 2,
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
