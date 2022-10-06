import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { allUserTrips } from '../../../../redux/actions/allUserTripsActions';

export default function ChangeTrip({ tripId }) {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(allUserTrips(id)); }, [open]);

  const allTrips = useSelector((state) => state.oneUserTrips);
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    aboutMembers: allTrips[0].aboutMembers,
    aboutTrip: allTrips[0].aboutTrip,
    membersCount: allTrips[0].membersCount,
  });
  useEffect(() => {
    setInputs({
      aboutMembers: allTrips[0].aboutMembers,
      aboutTrip: allTrips[0].aboutTrip,
      membersCount: allTrips[0].membersCount,
    });
  }, [allTrips]);

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
      setOpen(false);
    } else { setError(!error); }
  };

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        sx={{ mt: 2, ml: '30%' }}
        onClick={() => setOpen(true)}
      >
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
                width: '50%',
                maxHeight: '97%',
                overflow: 'auto',
                background: '#d7ccc8',
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
                      value={inputs?.aboutMembers}
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
                      value={inputs?.aboutTrip}
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
                      value={inputs?.membersCount}
                      onChange={changeHandler}
                    />
                    <Button
                      type="submit"
                      onSubmit={(e) => submitHandler(e, inputs)}
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        border: 'solid',
                        borderColor: '#a1887f',
                        width: '20%',
                        ml: '41%',
                      }}
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
