import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ChangeCardModal() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
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

    axios.patch('/api/trip/update', data)
      .then((res) => setInputs(res.data.path));
    navigate(`/api/users/user/${id}`);
  };

  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Изменить
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
              <Box
                onSubmit={(e) => submitHandler(e, inputs)}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >

                <TextField
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
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Stack>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Поехали!
                </Button>
              </Box>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
