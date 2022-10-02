import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TripCardModal from '../TripCardModal';
import './tripCardStyle.css';

export default function TripCard() {
  const allCards = useSelector((state) => state.tripCard);

  console.log(allCards);
  return (
    <div className="containerCard">
      {allCards && allCards?.map((el) => (
        <div key={el.id}>
          <div className="box">
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
                  <img src={el?.User.photo} alt={el.User.name} />
                  <div className="user-info">
                    Организатор
                    <Link to="/page">
                      <h5>{el.User.name}</h5>
                    </Link>
                  </div>
                </div>
                <TripCardModal oneCard={el} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
