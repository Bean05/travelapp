import React, { useEffect, useState } from 'react';
import {
  Container, Avatar, Grid, Button,
} from '@mui/material';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';
import { allInfo, editHandler } from '../../redux/actions/userInfoActions';
import UserComments from '../UserComments';

export default function UserAccount() {
  const dispatch = useDispatch();
  const [session, setSession] = useState({});

  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => { dispatch(allInfo()); }, []);
  useEffect(() => {
    fetch('http://localhost:3001/api/users/session')
      .then((data) => setSession(data));
  }, []);

  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState({
    age: user.age,
    city: user.city,
    about: user.about,
    driveLic: user.driverLic,
    habits: user.habits,
    pets: user.pets,
    transport: user.transport,
  });
  const inpuntHandler = (e) => (setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })));

  const changeAll = () => {
    dispatch(editHandler(input));
    setEditing(false);
  };

  return (
    <Container>
      {user.id === session.id
        ? (
          <Button
            variant="contained"
            onClick={() => setEditing(!editing)}
            style={{
              width: '35px', height: '25px', fontSize: '50%',
            }}
          >
            Изменить
          </Button>
        ) : (
          <> </>)}

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
              {Object.values(user).filter((info) => (
                <ListGroupItem>
                  {' '}
                  {info !== null}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Grid>
      </Grid>
      <UserComments />
    </Container>
  );
}
