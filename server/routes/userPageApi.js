const express = require('express');
const { User, Trip, Rating } = require('../db/models');

const router = express.Router();

router.get('/page/:id', async (req, res) => {
  const { id } = req.params;
  const oneInfo = await User.findOne({
    where: { id },
    attributes: ['name', 'about', 'photo', 'city', 'age', 'social', 'pets', 'habits', 'drivLic', 'transport', 'telegram', 'phone'],
  });
  // console.log(`ТО, ЧТО ВЫВОДИТ ${oneInfo}`);
  res.json(oneInfo);
});

router.get('/alltripsuser/:id', async (req, res) => {
  console.log('okkkk');
  const { id } = req.params;
  const allTrips = await Trip.findAll({ where: { userId: id } });
  console.log(`ТО, ЧТО ВЫВОДИТ ${allTrips}`);
  res.json(allTrips);
});

router.get('/page/:id/allComents', async (req, res) => {
  try {
    const { id } = req.params;
    const allComents = await Rating.findAll({ where: { userId: id } });
    res.json(allComents);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
