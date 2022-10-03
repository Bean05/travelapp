import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import { setAllComments } from '../../../redux/actions/allCommentsActions';

export default function UserComments() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => { dispatch(setAllComments(id)); }, []);

  const allComments = useSelector((state) => state.allComments);
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      {allComments && allComments?.map((el) => (
        <CardBody key={el.id}>
          <CardTitle tag="h5">
            {el.author}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {el.stars}
          </CardSubtitle>
          <CardText>
            {el.text}
          </CardText>
        </CardBody>
      ))}
    </Card>
  );
}
