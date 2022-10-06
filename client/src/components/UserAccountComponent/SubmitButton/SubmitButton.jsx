import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
// import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
import { Avatar, CssBaseline } from '@mui/material';
// import { Box } from '@mui/system';
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
        <Button sx={{ mt: 1, ml: '18%' }} variant="outlined" color="neutral" onClick={() => setOpen(true)}>
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
                background: '#d7ccc8',
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <Grid container component="main" sx={{ height: 'auto' }}>
                <CssBaseline />
                <div style={{ left: '21%', width: '100%', position: 'relative' }}>
                  <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}> Запросы на поездку:</h1>
                </div>
                <div style={{
                  marginTop: '3%',
                  width: '80%',
                  marginLeft: '10%',
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                  marginBottom: '10%',
                }}
                >
                  {value1 && value1 ? (
                    value1.map(((el) => (
                      <div style={{
                        minWidth: '200px',
                        minHeight: '200px',
                        width: '30%',
                        backgroundColor: '#efebe9',
                        boxShadow: '0 0 5px black',
                        borderRadius: '20px',
                      }}
                      >
                        <Avatar style={{ position: 'relative', left: '39%', marginTop: '5%' }} src={`http://localhost:3001/${el?.User.photo}`} alt={el?.User.photo} size="sm" />
                        <div style={{
                          marginTop: '5%',
                          textAlign: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                        >
                          <Link style={{ textDecoration: 'none' }} to={`/page/${el.User.id}`}>{el.User.name}</Link>
                          <a
                            href={(`tg://resolve?domain=${el.User.social}`)}
                            style={{ textDecoration: 'none', mr: '50%' }}
                          >
                            Связаться со мной
                          </a>
                        </div>
                        <div style={{ display: 'flex' }}>
                          <Button
                            type="button"
                            value
                            onClick={(e) => changeFalse(e.target.value, el.id, el.Trip.userId)}
                            fullWidth
                            variant="contained"
                            sx={{
                              mt: 3,
                              mb: 2,
                              border: 'solid',
                              borderColor: '#a1887f',
                              width: '20%',
                              ml: '18%',
                              boxShadow: '0 0 5px black',
                            }}

                          >
                            Ок!
                          </Button>
                          <Button
                            type="button"
                            fullWidth
                            value={false}
                            onClick={(e) => changeFalse(e.target.value, el.id)}
                            variant="contained"
                            sx={{
                              mt: 3,
                              mb: 2,
                              border: 'solid',
                              borderColor: '#bcaaa4',
                              width: '20%',
                              ml: '20%',
                              boxShadow: '0 0 5px black',
                            }}
                          >
                            X
                          </Button>
                        </div>
                      </div>
                    )))

                  )
                    : (<p>Пусто</p>) }
                </div>
              </Grid>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
