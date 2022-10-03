const express = require('express');
const { Trip, User, Sequelize, sequelize } = require('../db/models');

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
  } = req.body;
  let { date } = req.body;
  const newData = new Date(date);
  date = `${newData.getFullYear()}-${newData.getMonth() + 1}-${newData.getDate()}`;
  if (date !== '1970-1-1' && date != null) {
    where.push({ date });
  }
  if (cityStart) {
    where.push({ cityStart: sequelize.where(sequelize.fn('LOWER', sequelize.col('cityStart')), 'LIKE', `%${cityStart.toLowerCase()}%`) });
  }
  if (cityWhere) {
    where.push({ cityWhere: sequelize.where(sequelize.fn('LOWER', sequelize.col('cityWhere')), 'LIKE', `%${cityWhere.toLowerCase()}%`) });
  }
  const trip = await Trip.findAll({ where, include: User });
  res.json(trip);
});

router.post('/random', async (req, res) => {
  const random = await Trip.findOne({ order: Sequelize.literal('random()'), include: User });
  res.json(random);
});

module.exports = router;
