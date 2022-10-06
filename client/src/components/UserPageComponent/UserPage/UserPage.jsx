import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { oneUser } from '../../../redux/actions/oneUserInfoActions';
import UserTrips from '../UserTrips/UserTrips';
import UserComments from '../UserComments';
import '../index.css';

export default function UserAccount() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => { dispatch(oneUser(id)); }, [id]);

  const oneUserInfo = useSelector((state) => state.oneUserInfo);
  console.log(oneUserInfo);

  const social = oneUserInfo?.social;
  const telega = oneUserInfo?.telegram;

  return (
    <div className="allFlex">
      <div className="pageDiv">
        <div className="cardPageDiv">
          <Card
            id="muiCardPage"
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
                  src={`http://localhost:3001/${oneUserInfo?.photo}`}
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
              <h3>Имя</h3>
              {oneUserInfo?.name}
            </Typography>
            {!oneUserInfo?.about && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Обо мне</h3>
              {oneUserInfo.about}
            </Typography>
            )}
            {oneUserInfo?.age !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Возраст</h3>
              {' '}
              {oneUserInfo.age}
            </Typography>
            )}
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Телефон</h3>

              {oneUserInfo?.phone}

            </Typography>
            {oneUserInfo?.pets !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Животные:</h3>
              {oneUserInfo.pets}
            </Typography>
            )}
            {oneUserInfo?.habits !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Мои привычки</h3>
              {oneUserInfo.habits}
            </Typography>
            )}
            {oneUserInfo?.city !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Город</h3>
              {oneUserInfo.city}
            </Typography>
            )}
            {oneUserInfo?.drivLic !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Водительские права</h3>
              {oneUserInfo.drivLic}
            </Typography>
            )}
            {oneUserInfo?.transport !== null && (
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
              <h3>Транспорт</h3>
              {oneUserInfo?.transport}
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
          </Card>
        </div>
        <UserTrips />
      </div>
      <UserComments />
    </div>
  );
}
