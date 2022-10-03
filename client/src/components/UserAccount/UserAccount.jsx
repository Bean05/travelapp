import React, { useEffect, useState } from 'react';
import {
  Container, Avatar, Grid, Button,
} from '@mui/material';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';
import { allInfo, editHandler } from '../../redux/actions/userActions';
import UserComments from '../UserPageComponent/UserComments';
// import TripCard from '../TripCardComponent/TripCard';

export default function UserAccount() {
  const dispatch = useDispatch();
  // const [session, setSession] = useState({});

  // const user = useSelector((state) => state.user);
  const tripCard = useSelector((state) => state.tripCard);
  console.log(tripCard);

  useEffect(() => { dispatch(allInfo()); }, []);
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/users/session')
  //     .then((data) => setSession(data));
  // }, []);

  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState({
    age: tripCard.User.age,
    city: tripCard.User.city,
    about: tripCard.User.about,
    driveLic: tripCard.User.driverLic,
    habits: tripCard.User.habits,
    pets: tripCard.User.pets,
    transport: tripCard.User.transport,
  });
  const inpuntHandler = (e) => (setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })));

  const changeAll = () => {
    dispatch(editHandler(input));
    setEditing(false);
  };

  return (
    <Container>
      {/* {user.id === session.id
        ? ( */}
      <Button
        variant="contained"
        onClick={() => setEditing(!editing)}
        style={{
          width: '35px', height: '25px', fontSize: '50%',
        }}
      >
        Изменить
      </Button>
      {/* ) : (
          <> </>)} */}

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Avatar
            alt="Remy Sharp"
            style={{
              marginLeft: '100px', marginTop: '150px', width: '150px', height: '150px',
            }}
            src="/static/images/avatar/1.jpg"
          />
        </Grid>
        <Grid item xs={8}>

          {editing ? (
            <ListGroup style={{
              marginTop: '150px', width: '80%', heigh: '100px',
            }}
            >
              {Object.keys(input).map((key) => (
                <input name={key} value={input[key]} onChange={inpuntHandler} />
              ))}
              <div>работает</div>

              <button onClick={changeAll} type="button" className="btn btn-outline-success mx-2">save</button>
            </ListGroup>
          ) : (
            <ListGroup style={{
              marginTop: '150px', width: '80%', heigh: '100px',
            }}
            >
              {Object.values(tripCard.User).filter((info) => (
                <ListGroupItem>
                  {' '}
                  {info !== null}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Grid>
      </Grid>
      <Grid style={{ marginTop: '40px' }}>
        <h3>Ближайшие поездки</h3>
        {/* {user.id }
        <TripCard /> */}
        <UserComments />

      </Grid>
    </Container>
  );
}
