import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAllMembersAsync } from '../../redux/actions/membershipActions';
// import TripCard from '../TripCardComponent/TripCard/TripCard';

export default function Membership() {
  const membership = useSelector((state) => state.membership);
  //   const tripCard = useSelector((state) => state.tripCard);
  const { id } = useParams();
  const allTrip = membership.filter((el) => el.userId === +id);
  // const myTrips = allTrip.map(())
  const dispatch = useDispatch();

  // console.log('Users trips:', allTrip);
  // console.log(membership);
  //   console.log('tripCard---', tripCard);
  // console.log('params: ', id);

  useEffect(() => {
    dispatch(setAllMembersAsync());
  }, []);
  return (
    <div className="containerCard">
      <h3>Я участвую</h3>
      {allTrip && allTrip.length < 1 ? (<div>Поездок еще нет</div>) : (allTrip.map((el) => (
        <div key={el?.Trip.id}>
          <div className="box">
            <div className="card">
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
                </div>
                <div>
                  {/* {allTrip.request === 'null' ?
                  (<div> Ожидайте подтверждение </div>) : (<> </>)} */}
                  {allTrip?.request === true
                    ? (<Button variant="outlined"> Вы едете! </Button>)
                    : (<Button variant="outlined">Организатор отклонил заявку</Button>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )))}
    </div>

  );
}
