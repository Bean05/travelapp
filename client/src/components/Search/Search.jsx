import React, { useEffect, useState } from 'react';
import {
  TextField, Box, Button, Link,
} from '@mui/material/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import './search.css';
// import axios from 'axios';
import { addSearch, searchSetTrip, setTripFunction } from '../../redux/actions/searchTripActions';
import TripCardModal from '../TripCardComponent/TripCardModal';

export default function Search() {
  const [valueStart, setValueStart] = React.useState(null);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    data: '',
    cityStart: '',
    cityWhere: '',
    user: '',
  });
  const { searchTrip } = useSelector((state) => state);
  console.log('searchTrip', searchTrip);
  useEffect(() => {
    if (!window.initState?.allBase) {
      dispatch(setTripFunction());
    } else {
      delete window.initState.allBase;
    }
  }, []);
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(searchSetTrip({
      date: valueStart,
      cityStart: input.cityStart,
      cityWhere: input.cityWhere,
      name: input.user,
    }))
      .then((data) => dispatch(addSearch(data.data)));
  };

  return (
    <>
      <form onSubmit={submitHandler} className="searchFatherDiv">
        <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="SearchInput"
              label="Дата"
              value={valueStart}
              name="data"
              onChange={(newValue) => {
                setValueStart(newValue);
              }}
            // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
          <TextField onChange={inputHandler} value={input.cityStart} name="cityStart" id="outlined-basic" label="Откуда" variant="outlined" className="SearchInput" />
        </Box>
        <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
          <TextField onChange={inputHandler} value={input.cityWhere} name="cityWhere" id="outlined-basic" label="Куда" variant="outlined" className="SearchInput" />
        </Box>
        <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2, pl: '38%' }}>
          <Button type="submit" size="large" variant="outlined">   Найти   </Button>
        </Box>
        <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
          <TextField onChange={inputHandler} value={input.name} name="user" id="outlined-basic" label="По организатору" variant="outlined" className="SearchInput" />
        </Box>
      </form>
      <div className="containerCard">
        {searchTrip && searchTrip?.map((el) => (
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
                    <img src={`http://localhost:3001/${el.User.photo}`} alt={el.User.name} />
                    <div className="user-info">
                      Организатор
                      <Link to={`/page/${el.User.id}`}>
                        <h5>{el.User.name}</h5>
                      </Link>
                    </div>
                    {console.log('элемент в поиске', el)}
                  </div>
                  <TripCardModal oneCard={el} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
