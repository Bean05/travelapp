const express = require('express');
const { Trip, User } = require('../db/models');

const router = express.Router();
router.post('/trip', async (req, res) => {
  const trip = await Trip.findAll({ include: User });
  res.json(trip);
});

router.post('/search', async (req, res) => {
  // console.log('server search', req.body);
  const where = [];
  const {
    cityStart,
    cityWhere,
    name,
  } = req.body;
  let { date } = req.body;
  const newData = new Date(date);
  // console.log(date);
  date = `${newData.getFullYear()}-${newData.getMonth() + 1}-${newData.getDate()}`;
  // console.log('sityStart>>>', sityStart);
  // console.log('user>>>', user);
  // console.log('sityWhere>>>', sityWhere);
  console.log('>>>', date);
  // eslint-disable-next-line eqeqeq
  if (date != '1970-1-1' && date != null) {
    where.push({ date });
  }
  if (cityStart) {
    where.push({ cityStart });
  }
  if (cityWhere) {
    where.push({ cityWhere });
  }
  // if (name) {
  //   where.push({ name });
  //   console.log('massive', where);
  //   const trip = await User.findAll({ where });
  //   console.log('trip>>>юзер', trip);
  //   res.json(trip);
  // }
  const trip = await Trip.findAll({ where, include: User });
  console.log('trip>>>', trip);
  res.json(trip);
});

module.exports = router;
