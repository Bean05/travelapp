// import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allUserTrips } from '../../../redux/actions/allUserTripsActions';
import '../../TripCardComponent/TripCard/tripCardStyle.css';
import '../index.css';

export default function UserTrips() {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => { dispatch(allUserTrips(id)); }, [id]);

  const allTrips = useSelector((state) => state.oneUserTrips);
  // console.log(allTrips);
  const oneUserInfo = useSelector((state) => state.oneUserInfo);
  return (

  // <div className="containerCard">
    <div id="userTrips" className="userTrips">
      <h3 style={{ marginTop: '10px', marginLeft: '15px', fontSize: '40px' }}>Организованные мной поездки</h3>
      {' '}
      <div id="conteinerMovePage">
        {allTrips && allTrips.length < 1 ? (<p>Поездок еще нет</p>) : (allTrips.map((el) => (
          <div key={el?.id}>
            <div className="box">
              <div
                className="card"
                style={{
                  width: '300px', height: '520px', background: '#bec2c5', marginBottom: '20%',
                }}
              >
                <div className="card-header">
                  <img src={`http://localhost:3001/${el?.tripPhoto}`} alt={el?.tripName} />
                </div>
                <div className="card-body">
                  {/* <span className="tag tag-teal">{el.tripName}</span> */}
                  <h4>
                    {el?.tripName}
                  </h4>
                  <div>
                    Даты:
                    {' '}
                    {el?.date}
                  </div>
                  <div>
                    Откуда:
                    {' '}
                    {el?.cityStart}
                  </div>
                  <div>
                    Куда:
                    {' '}
                    {el?.cityWhere}
                  </div>
                  <div className="user">
                    <img src={`http://localhost:3001/${oneUserInfo?.photo}`} alt={oneUserInfo?.name} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}
