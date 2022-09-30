import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function UserInfo() {
  const user = useSelector((state) => state.user);
  useEffect(() => {

  }, []);
  const [editing, setIditing] = useState(false);
  return (
    <ListGroup style={{
      marginTop: '150px', width: '80%', heigh: '100px',
    }}
    >
      {user?.filter((info) => <ListGroupItem>{info !== null}</ListGroupItem>)}
      {/* <ListGroupItem>
        user.name
      </ListGroupItem>
      <ListGroupItem>
        user.age
      </ListGroupItem>
      <ListGroupItem>
        user.city
      </ListGroupItem>
      <ListGroupItem>
        user.about
      </ListGroupItem>
      <ListGroupItem>
        user.driveLic
      </ListGroupItem>
      <ListGroupItem>
        user.habits
      </ListGroupItem>
      <ListGroupItem>
        user.pets
      </ListGroupItem>
      <ListGroupItem>
        user.transport
      </ListGroupItem> */}
    </ListGroup>
  );
}
