// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { ListGroup, ListGroupItem } from 'reactstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { allInfo, editHandler } from '../../redux/actions/userInfoActions';

// export default function UserInfo() {
//   const dispatch = useDispatch();
//   const [session, setSession] = useState({});

//   const user = useSelector((state) => state.user);
//   console.log(user);

//   useEffect(() => { dispatch(allInfo()); }, []);
//   useEffect(() => {
//     fetch('http://localhost:3001/api/users/session')
//       .then((data) => setSession(data));
//   }, []);

//   const [editing, setEditing] = useState(false);
//   const [input, setInput] = useState({
//     // name: user.name,
//     age: user.age,
//     city: user.city,
//     about: user.about,
//     driveLic: user.driverLic,
//     habits: user.habits,
//     pets: user.pets,
//     transport: user.transport,
//   });
//   const inpuntHandler = (e) => (setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })));

//   const changeAll = () => {
//     dispatch(editHandler(input));
//     setEditing(false);
//   };

//   return (
//     <>
//       {user.id === session.id
//         ? (
//           <Button
//             variant="contained"
//             onClick={() => setEditing(!editing)}
//             style={{
//               width: '35px', height: '25px', fontSize: '50%',
//             }}
//           >
//             Изменить
//           </Button>
//         ) : (
//           <> </>)}
//     </>
//   );
// }
