import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allUserTrips } from '../../../../redux/actions/allUserTripsActions';
import ChangeTrip from '../ChangeTrip';

export default function UserAccountTrips() {
  const dispatch = useDispatch();
  // const [edit, setEdit] = useState(false);

  const { id } = useParams();
  useEffect(() => { dispatch(allUserTrips(id)); }, []);

  const allTrips = useSelector((state) => state.oneUserTrips);
  const user = useSelector((state) => state.user);
  return (

    <div className="containerCard">
      <h3>Мои поездки</h3>
      {allTrips && allTrips.length < 1 ? (<div>Поездок еще нет</div>) : (allTrips.map((el) => (
        <div key={el?.id}>
          <div className="box">
            <div className="card">
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
              </div>
            </div>
          </div>
        </div>
      )))}

    </div>
  );
}