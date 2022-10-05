import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserCard, updateUserPfoto } from '../../../../redux/actions/searchTripActions';
import { allInfo } from '../../../../redux/actions/userActions';

export default function ChangeUserAccountModal() {
  const dispatch = useDispatch();
  const [modalUpdate, setModalUpdate] = React.useState(false);
  const { id } = useParams();
  useEffect(() => { dispatch(allInfo(id)); }, [modalUpdate]);
  const [error, setError] = useState(false);
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    social: user.social,
    photo: user.photo,
    about: user.about,
    age: user.age,
    pets: user.pets,
    habits: user.habits,
    drivLic: user.drivLic,
    city: user.city,
    transport: user.transport,
    telegram: user.telegram,
  });

  useEffect(() => {
    setInput({
      name: user.name,
      email: user.email,
      phone: user.phone,
      social: user.social,
      photo: user.photo,
      about: user.about,
      age: user.age,
      pets: user.pets,
      habits: user.habits,
      drivLic: user.drivLic,
      city: user.city,
      transport: user.transport,
      telegram: user.telegram,
    });
  }, [user]);

  const changeHandlerImg = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const dataFoto = new FormData();
    dataFoto.append('photo', input.photo);
    dispatch(updateUserPfoto(dataFoto, id));
    if (input.name
      && input.phone
      && input.social
      && input.photo) {
      dispatch(updateUserCard({
        name: input.name,
        phone: input.phone,
        social: input.social,
        about: input.about,
        age: input.age,
        pets: input.pets,
        habits: input.habits,
        drivLic: input.drivLic,
        city: input.city,
        transport: input.transport,
        telegram: input.telegram,
      }, id, setModalUpdate));
      dispatch(allInfo(id));
    } else { setError(true); }
  };
  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setModalUpdate(true)}>
        Изменить
      </Button>
      <Transition in={modalUpdate} timeout={400}>
        {(state) => (
          <Modal
            keepMounted
            modalUpdate={!['exited', 'exiting'].includes(state)}
            onClose={() => setModalUpdate(false)}
            componentsProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: 'none',
                  transition: 'opacity 400ms, backdrop-filter 400ms',
                  ...{
                    entering: { opacity: 1, backdropFilter: 'blur(1px)' },
                    entered: { opacity: 1, backdropFilter: 'blur(1px)' },
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
                background: '#F5F5F5',
                opacity: 0,
                transition: 'opacity 300ms',
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <Box
                onSubmit={submitHandler}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="NameID"
                  label="Имя"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={input.name}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="Телефон"
                  type="text"
                  id="phoneID"
                  autoComplete="phone"
                  autoFocus
                  value={input.phone}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="social"
                  label="Соц.сети"
                  type="text"
                  id="socialID"
                  autoComplete="social"
                  autoFocus
                  value={input.social}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="about"
                  label="О себе"
                  type="text"
                  id="aboutID"
                  autoComplete="aboutID"
                  autoFocus
                  value={input.about}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="age"
                  label="Сколько Вам лет?"
                  type="number"
                  id="ageID"
                  autoComplete="aboutTrip"
                  autoFocus
                  value={input.age}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="pets"
                  label="Домашние питомцы"
                  type="text"
                  id="petsID"
                  autoComplete="pets"
                  autoFocus
                  value={input.pets}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="habits"
                  label="Хобби и увлечения"
                  type="text"
                  id="habitsID"
                  autoComplete="habits"
                  autoFocus
                  value={input.habits}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="drivLic"
                  label="Вдительские права и категория"
                  type="text"
                  id="drivLicID"
                  autoComplete="drivLic"
                  autoFocus
                  value={input.drivLic}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="city"
                  label="Город проживания"
                  type="text"
                  id="cityID"
                  autoComplete="drivLic"
                  autoFocus
                  value={input.city}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="transport"
                  label="Транспорт: машина, мотоцикл, яхта, и т.д."
                  type="text"
                  id="transportID"
                  autoComplete="drivLic"
                  autoFocus
                  value={input.transport}
                  onChange={changeHandler}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="telegram"
                  label="Telegram"
                  type="text"
                  id="telegramID"
                  autoComplete="telegram"
                  autoFocus
                  value={input.telegram}
                  onChange={changeHandler}
                />
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
                    />
                  </Button>
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    {/* <input hidden accept="image/*" type="file" /> */}
                    <PhotoCamera />
                  </IconButton>
                </Stack>
                {error && <p style={{ color: 'red', fontSize: '30px' }}>Заполни обязательные поля*</p>}
                <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Изменить!
                  </Button>
                  <Button
                    onClick={() => setModalUpdate(false)}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Отмена!
                  </Button>
                </Box>
              </Box>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
