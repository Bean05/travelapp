import React from 'react';
import { Transition } from 'react-transition-group';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

// import { NavLink } from 'react-router-dom';

export default function TripCardModal({ oneCard }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Подробнее
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
              <Typography
                id="fade-modal-dialog-title"
                component="h2"
                level="inherit"
                fontSize="1.25em"
                mb="0.25em"
              >
                <h4>{oneCard.tripName}</h4>
              </Typography>
              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
                <strong>
                  Даты:
                  {' '}
                  {' '}
                </strong>
                {oneCard.date}
              </Typography>
              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
                <strong>
                  Откуда:
                  {' '}

                </strong>
                {oneCard.cityStart}
              </Typography>
              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
                <strong>
                  Куда:
                  {' '}
                </strong>
                {oneCard.cityWhere}
              </Typography>

              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
                <strong>
                  О поездке:
                  {' '}

                </strong>
                {oneCard.aboutTrip}
              </Typography>

              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
                <strong>
                  Кого ищу:
                  {' '}

                </strong>
                {oneCard.aboutMembers}
              </Typography>

              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
                <strong>
                  Cколько человек всего:
                  {' '}
                </strong>
                {oneCard.membersCount}

              </Typography>
              <Typography
                id="fade-modal-dialog-description"
                textColor="text.tertiary"
              >
                <strong>
                  Занято:
                  {' '}
                </strong>
                {oneCard?.Memberships?.length}

              </Typography>
              <Typography>
                <strong>
                  Телефон:
                </strong>
                {' '}
                {' '}
                {oneCard.User.phone}
              </Typography>
              {oneCard?.User?.telegram !== null ? (
                <a href={`tg://resolve?domain=${oneCard.User.telegram}`}>
                  Телеграм
                </a>
              ) : ''}
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
