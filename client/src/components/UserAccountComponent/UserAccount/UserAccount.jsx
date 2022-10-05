import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Button, Avatar,
} from '@mui/material';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allInfo } from '../../../redux/actions/userActions';
<<<<<<< HEAD
import UserAccountTrips from '../UserAccountTrips';
import EditButton from '../EditButton/EditButton';
=======
import UserAccountTrips from '../MyTrips/UserAccountTrips';
import Membership from '../../Membership/Membership';
>>>>>>> dev

export default function UserAccount() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => { dispatch(allInfo(id)); }, []);
  const [editing, setEditing] = useState(false);

  const social = user?.social;
  const telega = user?.telegram;

  return (
    <Container>
      <EditButton />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Avatar
            alt="Remy Sharp"
            style={{
              marginLeft: '100px', marginTop: '150px', width: '150px', height: '150px',
            }}
            src={`http://localhost:3001/${user?.photo}`}
          />
        </Grid>
        <Grid item xs={8}>

          {editing ? (
            <ListGroup style={{
              marginTop: '150px', width: '80%', heigh: '100px',
            }}
            />
          ) : (
            <ListGroup style={{
              marginTop: '150px', width: '80%', heigh: '100px',
            }}
            >
              <ListGroupItem>
                {user?.name}
              </ListGroupItem>
              <ListGroupItem>
                {user?.about !== null ? <ListGroupItem>{user.about}</ListGroupItem> : <> </>}
              </ListGroupItem>
              {user?.age !== null ? <ListGroupItem>{user.age}</ListGroupItem> : <> </>}
              <ListGroupItem>
                {user?.phone}
              </ListGroupItem>
              {user?.pets !== null
                ? <ListGroupItem>{user.pets}</ListGroupItem> : <> </>}
              {user?.habits !== null
                ? <ListGroupItem>{user.habits}</ListGroupItem> : <> </>}
              {user?.city !== null
                ? <ListGroupItem>{user.city}</ListGroupItem> : <> </>}
              {user?.drivLic !== null
                ? <ListGroupItem>{user.drivLic}</ListGroupItem> : <> </>}
              {user?.transport !== null
                ? <ListGroupItem>{user?.transport}</ListGroupItem> : <> </>}

              <ListGroupItem key={social}>
                <a href={social} style={{ textDecoration: 'none' }}>
                  <img
                    src="https://www.svgrepo.com/show/216563/image-photo.svg"
                    alt="social"
                    style={{ width: '30px', heigh: '30px' }}
                  />
                  {' '}
                  Моя соц.сеть
                </a>
              </ListGroupItem>
              {social !== null ? (
                <ListGroupItem key={telega}>
                  <a
                    href={`tg://resolve?domain=${telega}`}
                    style={{ textDecoration: 'none' }}
                  >
                    Связаться со мной в  Телеграм
                  </a>
                </ListGroupItem>
              ) : (<> </>)}
            </ListGroup>
          )}
        </Grid>
      </Grid>
      <UserAccountTrips />
      <Membership />
    </Container>
  );
}
