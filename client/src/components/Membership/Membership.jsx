import { Box, Button, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setAllMembersAsync } from '../../redux/actions/membershipActions';
import ModalMembership from './ModalMembership';
// import TripCardModal from '../TripCardComponent/TripCardModal';
// import TripCardModal from '../TripCardComponent/TripCardModal/TripCardModal';
// import TripCard from '../TripCardComponent/TripCard/TripCard';

export default function Membership() {
  const membership = useSelector((state) => state.membership);
  const { id } = useParams();
  const allTrip = membership.filter((el) => el.userId === +id);
  const dispatch = useDispatch();

  // console.log('Users trips:', allTrip);
  // console.log(membership);
  //   console.log('tripCard---', tripCard);
  // console.log('params: ', id);

  useEffect(() => {
    dispatch(setAllMembersAsync());
  }, []);
  return (
    <div className="containerCard" id="otherTripAll">
      <h3 style={{ marginTop: '15px', marginLeft: '15px', fontSize: '40px' }}>Я участвую</h3>
      <div id="otherTripMove">
        {allTrip && allTrip.length < 1 ? (<div>Поездок еще нет</div>) : (allTrip.map((el) => (
          <div className="box">
            <div className="card" style={{ width: '300px', background: '#a8a199' }}>
              <div className="card-header">
                <img src={`http://localhost:3001/${el?.Trip.tripPhoto}`} alt={el?.Trip.tripName} />
              </div>
              <div className="card-body">
                {/* <span className="tag tag-teal">{el.tripName}</span> */}
                <h4>
                  {el?.Trip.tripName}
                </h4>
                <div>
                  Даты:
                  {' '}
                  {el?.Trip.date}
                </div>
                <div>
                  Откуда:
                  {' '}
                  {el?.Trip.cityStart}
                </div>
                <div>
                  Куда:
                  {' '}
                  {el?.Trip.cityWhere}
                </div>
                <div className="user">
                  <img src={`http://localhost:3001/${el?.Trip.User.photo}`} alt={el?.Trip.User.name} />
                  <div className="user-info">
                    Организатор
                    <Link to={`/page/${el?.Trip.User.id}`} style={{ textDecoration: 'none', color: '#1f2f40' }}>
                      <h5>{el.Trip.User.name}</h5>
                    </Link>
                  </div>
                </div>
                <ModalMembership oneCard={el} />
                <div>
                  {el.request === null
                    && (
                    <div>
                      <Box sx={{
                        display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap',
                      }}
                      >
                        <CircularProgress determinate value={50} />
                        <p style={{ fontSize: '20px', color: '#FFD300' }}>Ожидайте подтверждения</p>
                      </Box>
                    </div>
                    )}

                  {el?.request === true
                    && (<div>Вы едете!</div>)}
                  {el?.request === false && (<Button variant="outlined">Организатор отклонил заявку</Button>)}
                </div>
              </div>
            </div>
          </div>
        )))}
      </div>
    </div>

  );
}
