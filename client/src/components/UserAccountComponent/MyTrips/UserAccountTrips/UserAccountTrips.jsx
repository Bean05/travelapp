import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allUserTrips } from '../../../../redux/actions/allUserTripsActions';
import SubmitButton from '../../SubmitButton';
import ChangeTrip from '../ChangeTrip';

export default function UserAccountTrips() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => { dispatch(allUserTrips(id)); }, []);

  const allTrips = useSelector((state) => state.oneUserTrips);
  const user = useSelector((state) => state.user);
  return (

    <div id="myTrips">
      <h3 style={{ marginTop: '15px', marginLeft: '15px', fontSize: '50px' }}>Поездки, которые я организовал</h3>
      <div id="conteinerMove">
        {allTrips && allTrips.length < 1 ? (<div>Поездок еще нет</div>) : (allTrips.map((el) => (
          <div className="box" id="cardBoxArea">
            <div className="card" id="OneCard" style={{ width: '355px' }}>
              <div className="card-header">
                <img src={`http://localhost:3001/${el?.tripPhoto}`} alt={el?.tripName} />
              </div>
              <div className="card-body">
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
                  <img src={`http://localhost:3001/${user?.photo}`} alt={user?.name} />
                </div>
                <ChangeTrip tripId={el.id} />
                <SubmitButton />
              </div>
            </div>
          </div>
        )))}
      </div>

    </div>
  );
}
