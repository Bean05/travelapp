import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
          <div className="logo">
            <img src="/logo2.png" alt="logo" style={{ borderRadius: '50%' }} />
          </div>
          <video src="/travel.mp4" autoPlay muted loop preload="auto" style={{ width: '100%' }} />
          <div className="text">
            <h1>САЙТ ДЛЯ ПОИСКА ЛУЧШИХ ПОПУТЧИКОВ И НОВЫХ ДРУЗЕЙ! </h1>
          </div>
        </div>
      </div>
      <div className="allCards">
        <TripCard />
      </div>
    </div>
  );
}
