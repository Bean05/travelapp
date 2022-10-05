import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllCardsAsync } from '../../redux/actions/tripCardActions';
import TripCard from '../TripCardComponent/TripCard';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllCardsAsync());
  }, []);

  return (
    <div className="home">
      <div className="videoWrapper">
        <video src="/travel.mp4" autoPlay muted loop preload="auto" />
      </div>
      <div>
        <h1>Сайт о путешествиях с друзьями</h1>
      </div>
      <TripCard />
    </div>
  );
}
