import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import { allUserTrips } from '../../../redux/actions/allUserTripsActions';

export default function TravelWith() {
  const oneUserTrips = useSelector((state) => state.oneUserTrips);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(allUserTrips(id)));
  console.log(oneUserTrips);
  return (
    <div>
        {oneUserTrips && oneUserTrips?.map((el) => )}
      <Card 
        style={{
          width: '18rem',
        }}
      >
        <CardBody key={el.id}>
          <CardTitle tag="h5">
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText />
          {el.title}
        </CardBody>
      </Card>
    </div>
  );
}
