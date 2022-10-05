import React, { useCallback, useEffect, useState } from 'react';
import {
  TextField, Box, Button, Grid,
} from '@mui/material/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import './search.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  addSearch, searchSetTrip, setTripFunction, randomSetTrip,
} from '../../redux/actions/searchTripActions';
import TripCardModal from '../TripCardComponent/TripCardModal';

export default function Search() {
  const [valueStart, setValueStart] = React.useState(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [input, setInput] = useState({
    data: '',
    cityStart: '',
    cityWhere: '',
  });
  const { searchTrip } = useSelector((state) => state);
  // console.log('searchTrip', searchTrip);
  useEffect(() => {
    if (!window.initState?.allBase) {
      dispatch(setTripFunction());
    } else {
      delete window.initState.allBase;
    }
  }, []);
  const inputHandler = useCallback(
    (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }), []),
  );
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(searchSetTrip({
      date: valueStart,
      cityStart: input.cityStart,
      cityWhere: input.cityWhere,
    }))
      .then((data) => dispatch(addSearch(data.data)));
  };
  return (
    <>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
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
            <Box display="flex" alignItems="center" sx={{ justifyContent: 'space-around' }}>
              <Box display="flex" alignItems="center" sx={{ mt: 2, ml: '17%' }}>
                <Button onClick={() => dispatch(randomSetTrip())} color="success" size="large" variant="outlined">Испытать судьбу</Button>
              </Box>
              <Box display="flex" alignItems="center" sx={{ mt: 2, mr: '17%' }}>
                <Button type="submit" size="large" variant="outlined">   Найти   </Button>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" sx={{ justifyContent: 'center', mt: 2 }}>
              <TextField
                value={search}
                onChange={(e) => {
                  setSearch(() => e.target.value);
                }}
                id="outlined-basic"
                label="По организатору"
                variant="outlined"
                className="SearchInput"
              />
            </Box>
          </form>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <div className="containerCard">
        {searchTrip?.filter((el) => (search
          ? el.User.name.toLowerCase().includes(search.toLowerCase()) : true)).map((el) => (
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
