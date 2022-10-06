import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TripCardModal from '../TripCardModal';
import './tripCardStyle.css';

export default function TripCard() {
  const allCards = useSelector((state) => state.tripCard);

  // console.log('TripCard---allCards--->', allCards);

  return (
    <Box className="containerCard" sx={{ width: '62.5 rem', mx: 'auto' }}>
      {allCards && allCards?.map((el) => (
        <div key={el.id}>
          <Box sx={{ flexGrow: 1, my: '1 rem' }}>
            <Grid container spacing={4}>
              <div className="card">
                <div className="card-header">
                  <img src={`http://localhost:3001/${el.tripPhoto}`} alt={el.tripName} />
                </div>
                <div className="card-body">
                  {/* <span className="tag tag-teal">{el.tripName}</span> */}
                  <h4>
                    {el.tripName}
                  </h4>
                  <div>
                    Даты:
                    {' '}
                    {el.date}
                  </div>
                  <div>
                    Откуда:
                    {' '}
                    {el.cityStart}
                  </div>
                  <div>
                    Куда:
                    {' '}
                    {el.cityWhere}
                  </div>
                  <div className="user">
                    <img src={`http://localhost:3001/${el.User.photo}`} alt={el.User.name} />
                    <div className="user-info">
                      Организатор
                      <Link to={`/page/${el.User.id}`}>
                        <h5>{el.User.name}</h5>
                      </Link>
                    </div>
                  </div>
                  <TripCardModal oneCard={el} />
                </div>
              </div>
            </Grid>
          </Box>
        </div>
      ))}
    </Box>
  );
}
