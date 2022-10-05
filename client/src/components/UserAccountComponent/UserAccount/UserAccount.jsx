import React, { useEffect } from 'react';

// import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { allInfo } from '../../../redux/actions/userActions';
import EditButton from '../EditButton/EditButton';
import UserAccountTrips from '../MyTrips/UserAccountTrips';
import Membership from '../../Membership/Membership';
import '../index.css';

export default function UserAccount() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => { dispatch(allInfo(id)); }, []);
  // const [editing] = useState(false);

  const social = user?.social;
  const telega = user?.telegram;

  return (
    <div className="accountDiv">
      <div className="cardDiv">
        <Card
          id="muiCard"
          variant="outlined"
          sx={{
            marginTop: '20%', margin: '0',
          }}
        >
          <CardOverflow>
            <AspectRatio ratio="1">
              <img
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', verticalAlign: 'middle',
                }}
                src={`http://localhost:3001/${user?.photo}`}
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
            <h3>Имя</h3>
            {user?.name}
          </Typography>
          {user?.about !== null
            && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Обо мне</h3>
              {user.about}
            </Typography>
            )}
          {user?.age !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Возраст</h3>
              {' '}
              {user.age}
            </Typography>
          )}
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>{user?.phone}</Typography>
          {user?.pets !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Животные:</h3>
              {user.pets}
            </Typography>
          )}
          {user?.habits !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Мои привычки</h3>
              {user.habits}
            </Typography>
          )}
          {user?.city !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Город</h3>
              {user.city}
            </Typography>
          )}
          {user?.drivLic !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Водительские права</h3>
              {user.drivLic}
            </Typography>
          )}
          {user?.transport !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Транспорт</h3>
              {user?.transport}
            </Typography>
          )}
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }} key={social}>
            <a href={social} style={{ textDecoration: 'none', color: 'black' }}>
              <img
                src="https://www.svgrepo.com/show/216563/image-photo.svg"
                alt="social"
                style={{ width: '30px', heigh: '30px' }}
              />
              {' '}
              Моя соц.сеть
            </a>
          </Typography>
          {social !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }} key={telega}>
              <a
                href={`tg://resolve?domain=${telega}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Связаться со мной в  Телеграм
              </a>
            </Typography>
          )}
          <EditButton />
        </Card>
      </div>
      <div className="divCard">
        <UserAccountTrips />
        <Membership />
      </div>
    </div>
  // <div className="accountContainer">
  //   <div
  //     style={{
  //       background: 'red', flexDirection: 'column',
  // width: '50%', height: 'auto', flexWrap: 'wrap',
  //     }}
  //   >
  //     <div className="avatarDiv">
  //       <img
  //         className="avatar"
  //         alt="Remy Sharp"
  //         src={`http://localhost:3001/${user?.photo}`}
  //       />
  //     </div>

  //     <ListGroup
  //       className="info"
  //     >
  //       <ListGroupItem>
  //         <h3>Имя</h3>
  //         {user?.name}
  //       </ListGroupItem>

  //       {user?.about !== null
  //         && (
  //         <ListGroupItem>
  //           <h3>Обо мне</h3>
  //           {user.about}
  //         </ListGroupItem>
  //         )}

  //       {user?.age !== null && (
  //         <ListGroupItem>
  //           <h3>Возраст</h3>
  //           {' '}
  //           {user.age}
  //         </ListGroupItem>
  //       )}
  //       <ListGroupItem>{user?.phone}</ListGroupItem>
  //       {user?.pets !== null && (
  //         <ListGroupItem>
  //           <h3>Животные:</h3>
  //           {user.pets}
  //         </ListGroupItem>
  //       )}
  //       {user?.habits !== null && (
  //         <ListGroupItem>
  //           <h3>Мои привычки</h3>
  //           {user.habits}
  //         </ListGroupItem>
  //       )}
  //       {user?.city !== null && (
  //         <ListGroupItem>
  //           <h3>Город</h3>
  //           {user.city}
  //         </ListGroupItem>
  //       )}
  //       {user?.drivLic !== null && (
  //         <ListGroupItem>
  //           <h3>Водительские права</h3>
  //           {user.drivLic}
  //         </ListGroupItem>
  //       )}
  //       {user?.transport !== null && (
  //         <ListGroupItem>
  //           <h3>Транспорт</h3>
  //           {user?.transport}
  //         </ListGroupItem>
  //       )}
  //       <ListGroupItem key={social}>
  //         <a href={social} style={{ textDecoration: 'none', color: 'black' }}>
  //           <img
  //             src="https://www.svgrepo.com/show/216563/image-photo.svg"
  //             alt="social"
  //             style={{ width: '30px', heigh: '30px' }}
  //           />
  //           {' '}
  //           Моя соц.сеть
  //         </a>
  //       </ListGroupItem>
  //       {social !== null
  //           && (
  //           <ListGroupItem key={telega}>
  //             <a
  //               href={`tg://resolve?domain=${telega}`}
  //               style={{ textDecoration: 'none', color: 'black' }}
  //             >
  //               Связаться со мной в  Телеграм
  //             </a>
  //           </ListGroupItem>
  //           )}
  //     </ListGroup>
  //   </div>
  //   {/* </Grid> */}

  // </div>
  );
}
