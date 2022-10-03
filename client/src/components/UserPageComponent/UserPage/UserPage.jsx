import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Avatar, Grid,
} from '@mui/material';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { oneUser } from '../../../redux/actions/oneUserInfoActions';
import UserTrips from '../UserTrips/UserTrips';
import UserComments from '../UserComments';

export default function UserAccount() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => { dispatch(oneUser(id)); }, []);

  const oneUserInfo = useSelector((state) => state.oneUserInfo);
  console.log(oneUserInfo);

  const social = oneUserInfo?.social;
  const telega = oneUserInfo?.telegram;
  // const photo =

  // console.log('PHOTO', actualInfo.photo);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Avatar
            alt="Remy Sharp"
            style={{
              marginLeft: '100px', marginTop: '150px', width: '150px', height: '150px',
            }}
            src={`http://localhost:3001/${oneUserInfo?.photo}`}
          />
        </Grid>
        <Grid item xs={8}>

          <ListGroup
            key={oneUserInfo.id}
            style={{
              marginTop: '150px', width: '80%', heigh: '100px',
            }}
          >
            <ListGroupItem>
              {oneUserInfo?.name}
            </ListGroupItem>
            <ListGroupItem>
              {oneUserInfo?.about}
            </ListGroupItem>
            {oneUserInfo?.age !== null ? <ListGroupItem>{oneUserInfo.age}</ListGroupItem> : <> </>}
            <ListGroupItem>
              {oneUserInfo?.phone}
            </ListGroupItem>
            {oneUserInfo?.pets !== null
              ? <ListGroupItem>{oneUserInfo.pets}</ListGroupItem> : <> </>}
            {oneUserInfo?.habits !== null
              ? <ListGroupItem>{oneUserInfo.habits}</ListGroupItem> : <> </>}
            {oneUserInfo?.city !== null
              ? <ListGroupItem>{oneUserInfo.city}</ListGroupItem> : <> </>}
            {oneUserInfo?.drivLic !== null
              ? <ListGroupItem>{oneUserInfo.drivLic}</ListGroupItem> : <> </>}
            {oneUserInfo?.transport !== null
              ? <ListGroupItem>{oneUserInfo?.transport}</ListGroupItem> : <> </>}
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
            <ListGroupItem key={telega}>
              <a
                href={`tg://resolve?domain=${telega}`}
                style={{ textDecoration: 'none' }}
              >
                Связаться со мной в  Телеграм
              </a>
            </ListGroupItem>
          </ListGroup>
        </Grid>
      </Grid>
      <UserTrips />
      <UserComments />
    </Container>
  );
}
