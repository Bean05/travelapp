import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { setAllCardsAsync } from '../../redux/actions/tripCardActions';
import TripCard from '../TripCardComponent/TripCard';
import '../../main.css';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllCardsAsync());
  }, []);

  return (
    <div className="home">
      <div className="videoWrapper">
        <div className="myVideo">
          <video src="/travel.mp4" autoPlay muted loop preload="auto" style={{ width: '100%' }} />
          <div className="text">
            <Typography variant="h3"> САЙТ ДЛЯ ПОИСКА ЛУЧШИХ ПОПУТЧИКОВ И НОВЫХ ДРУЗЕЙ! </Typography>
          </div>
        </div>
      </div>
      <div className="allCards">
        <TripCard />
      </div>
    </div>
  );
}
