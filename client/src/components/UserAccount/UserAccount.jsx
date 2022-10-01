// import React, { useState, useEffect } from 'react';
// import {
//   Container, Avatar, Grid,
// } from '@mui/material';
// // import UserInfo from '../UserInfo';
// import { ListGroup, ListGroupItem } from 'reactstrap';
// import { useSelector } from 'react-redux';

// export default function UserAccount() {
//   const user = useSelector((state) => state.user);
//   useEffect(() => {

//   }, []);
//   const [editing, setIditing] = useState(false);

//   return (
//     <Container>
//       <Button
//         variant="contained"
//         onClick={() => dispatch(changeInfo(id))}
//         style={{
//           width: '35px', height: '25px', fontSize: '50%',
//         }}
//       >
//         Изменить
//       </Button>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <Avatar
//             alt="Remy Sharp"
//             style={{
//               marginLeft: '100px', marginTop: '150px', width: '150px', height: '150px',
//             }}
//             src="/static/images/avatar/1.jpg"
//           />
//         </Grid>
//         <Grid item xs={8}>
//           <ListGroup style={{
//             marginTop: '150px', width: '80%', heigh: '100px',
//           }}
//           >
//             {/* {user?.filter((info) => <ListGroupItem>{info !== null}</ListGroupItem>)} */}
//             <ListGroupItem>
//               user.name
//             </ListGroupItem>
//             <ListGroupItem>
//               user.age
//             </ListGroupItem>
//             <ListGroupItem>
//               user.city
//             </ListGroupItem>
//             <ListGroupItem>
//               user.about
//             </ListGroupItem>
//             <ListGroupItem>
//               user.driveLic
//             </ListGroupItem>
//             <ListGroupItem>
//               user.habits
//             </ListGroupItem>
//             <ListGroupItem>
//               user.pets
//             </ListGroupItem>
//             <ListGroupItem>
//               user.transport
//             </ListGroupItem>
//           </ListGroup>
//           {' '}

//         </Grid>
//       </Grid>

//     </Container>
//   );
// }
