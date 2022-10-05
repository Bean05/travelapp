import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

export default function ChangeTrip({ tripId }) {
  //   const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    aboutMembers: '',
    aboutTrip: '',
    membersCount: '',
  });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('aboutMembers', inputs.aboutMembers);
    data.append('aboutTrip', inputs.aboutTrip);
    data.append('membersCount', inputs.membersCount);
    if (inputs.aboutMembers
  && inputs.aboutTrip
  && inputs.membersCount) {
      axios.patch(`/api/trip/update/${tripId}`, data)
        .then((res) => setInputs(res.data.path));
      navigate(`/user/${id}`);
    } else { setError(!error); }
  };
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        ИЗМЕНИТЬ
      </Button>
      <Transition in={open} timeout={400}>
        {(state) => (
          <Modal
            keepMounted
            open={!['exited', 'exiting'].includes(state)}
            onClose={() => setOpen(false)}
            componentsProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: 'none',
                  transition: 'opacity 400ms, backdrop-filter 400ms',
                  ...{
                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === 'exited' ? 'hidden' : 'visible',
            }}
          >
            <ModalDialog
              aria-labelledby="fade-modal-dialog-title"
              aria-describedby="fade-modal-dialog-description"
              sx={{
                opacity: 0,
                transition: 'opacity 300ms',
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <Grid container component="main" sx={{ height: '50vh' }}>
                <CssBaseline />
                <div style={{ margin: '15px' }}>
                  <Typography component="h1" variant="h5">
                    Создать поездку
                  </Typography>
                  <Box onSubmit={(e) => submitHandler(e, inputs)} component="form" noValidate sx={{ mt: 1 }}>

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
                      value={inputs.aboutMembers}
                      onChange={changeHandler}
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
                      value={inputs.aboutTrip}
                      onChange={changeHandler}
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
                      value={inputs.membersCount}
                      onChange={changeHandler}
                    />
                    <Button
                      type="submit"
                      onSubmit={(e) => submitHandler(e, inputs)}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Поменять!
                    </Button>
                  </Box>
                </div>
              </Grid>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
