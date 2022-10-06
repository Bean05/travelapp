import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { Avatar, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { setAllMembersAsync } from '../../../redux/actions/membershipActions';

export default function SubmitButton({ cardId }) {
  const membership = useSelector((state) => state.membership);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  // console.log('cardID', cardId);
  const allTrip = membership.filter((el) => el.Trip.User.id === +id);
  const value1 = allTrip.filter((el) => el.request === null && el.tripId === cardId);
  // console.log('поездки самого юзера ', allTrip);
  // console.log('поездки самого юзера, которые он должен подтвердить ', value1);
  const [open, setOpen] = React.useState(false);
  const changeFalse = (value, idMem) => {
    axios.patch(`/api/membership/${idMem}`, { status: value })
      .then((res) => res.data);
    setOpen(false);
  };

  useEffect(() => {
    dispatch(setAllMembersAsync());
  }, [open]);
  return (
    <>
      {value1.length !== 0 ? (
        <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
          Подтвердите поездку
        </Button>
      )
        : (<> </>) }

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
                    Запросы на поездку
                  </Typography>
                </div>
                {value1 && value1 ? (
                  value1.map(((el) => (
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <div>
                        <Avatar src={`http://localhost:3001/${el?.User.photo}`} alt={el?.User.photo} size="sm" />
                        <p>{el.User.name}</p>
                        <a
                          href={`tg://resolve?domain=${el.User.social}`}
                          style={{ textDecoration: 'none' }}
                        >
                          Связаться со мной
                        </a>
                        <Button
                          type="button"
                          value
                          onClick={(e) => changeFalse(e.target.value, el.id, el.Trip.userId)}
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Ок!
                        </Button>
                        <Button
                          type="button"
                          fullWidth
                          value={false}
                          onClick={(e) => changeFalse(e.target.value, el.id)}
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          X
                        </Button>
                      </div>
                    </Box>
                  )))

                )
                  : (<p>Пусто</p>) }
              </Grid>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
