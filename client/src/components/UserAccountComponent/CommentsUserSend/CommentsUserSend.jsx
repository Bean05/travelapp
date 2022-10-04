import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card, CardBody, CardSubtitle, CardText,
} from 'reactstrap';
import { allUserTrips } from '../../../redux/actions/allUserTripsActions';

export default function CommentsUserSend() {
  const oneUserTrips = useSelector((state) => state.oneUserTrips);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(allUserTrips(id)), []);
  // console.log(oneUserTrips);
  return (
    <div>
      {oneUserTrips && oneUserTrips?.map((el) => (el.author === id ? (
        <Card
          style={{
            width: '18rem',
          }}
        >
          <CardBody key={el.id}>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {' '}
              <h3>Я оставил комментарий: </h3>
              {el.userId.name}
            </CardSubtitle>
            <CardText />
            {el.title}
          </CardBody>
        </Card>
      ) : (
        <> </>
      )))}

    </div>
  );
}
