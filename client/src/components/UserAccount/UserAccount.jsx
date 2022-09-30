import React, { useState, useEffect } from 'react';
import {
  Container, Avatar, Grid, Button,
} from '@mui/material';
// import UserInfo from '../UserInfo';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { allInfo } from '../../redux/actions/userActions';

export default function UserAccount() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const [age, setAge] = useState(user?.age || '');
  // const [city, setCity] = useState(user?.city || '');
  // const [about, setAbout] = useState(user?.about || '');
  // const [driverLic, setDriverLic] = useState(user?.driverLic || '');
  // const [habits, setHabits] = useState(user?.habits || '');
  // const [pets, setPets] = useState(user?.pets || '');
  // const [transport, setTransport] = useState(user?.transport || '');

  useEffect(() => { dispatch(allInfo()); }, []);
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState({
    // name: user.name,
    age: user.age,
    city: user.city,
    about: user.about,
    driveLic: user.driverLic,
    habits: user.habits,
    pets: user.pets,
    transport: user.transport,
  });
  const inpuntHandler = (e) => (setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })));

  const editHandler = async (e, input) => {
    setEditing(!editing);
    await axios.patch(`/api/users/page/${id}`, input)
    });
    if (response.ok) {
      const data = await response.json();
      setTodos((prev) => (prev.map((el) => ((el.id === id) ? data : el))));
    }
  };

  const changeAll = () => {
    editHandler(input);
    setEditing(false);
  };

  return (
    <Container>
      <Button
        variant="contained"
        onClick={() => dispatch(changeInfo(id))}
        style={{
          width: '35px', height: '25px', fontSize: '50%',
        }}
      >
        Изменить
      </Button>
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
              {/* <input name="age" value={age} onChange={(e) => setAge(e.target.value.age)} />
              <input name="city" type="text" value={city} onChange={(e) => setCity(e.target.value.city)} />
              <input name="about" type="text" value={about} onChange={(e) => setAbout(e.target.value.about)} />
              <input name="driverLic" type="text" value={driverLic} onChange={(e) => setDriverLic(e.target.value.driverLic)} />
              <input name="habits" type="text" value={habits} onChange={(e) => setHabits(e.target.value.habits)} />
              <input name="pets" type="text" value={pets} onChange={(e) => setPets(e.target.value.pets)} />
              <input name="transport" type="text" value={transport} onChange={(e) => setTransport(e.target.value.transport)} /> */}

              <button onClick={changeAll} type="button" className="btn btn-outline-success mx-2">save</button>
            </ListGroup>
          ) : (
            <ListGroup style={{
              marginTop: '150px', width: '80%', heigh: '100px',
            }}
            >
              {user?.filter((info) => <ListGroupItem>{info !== null}</ListGroupItem>)}
            </ListGroup>
          )}
        </Grid>
      </Grid>

    </Container>
  );
}
