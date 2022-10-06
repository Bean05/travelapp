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

export default function UserAccount() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => { dispatch(allInfo(id)); }, []);
  // const [editing] = useState(false);

  const social = user?.social;
  const telega = user?.telegram;

  return (
    <div className="bg-image">
      <div className="blur">
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
              {!user?.about && (
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
              <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                <h3>Телефон</h3>

                {user?.phone}

              </Typography>
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
                <a href={social} style={{ textDecoration: 'none', color: '#1f2f40' }}>
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
                  style={{ textDecoration: 'none', color: '#1f2f40' }}
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
      </div>
    </div>
  );
}
