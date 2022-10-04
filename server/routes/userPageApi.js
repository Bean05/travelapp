const express = require('express');
const {
  User, Trip, Rating,
} = require('../db/models');

const router = express.Router();

router.get('/page/:id', async (req, res) => {
  const { id } = req.params;
  const oneInfo = await User.findOne({
    include: [Trip,
      { model: Trip, include: [User] },
      {
        model: Rating, as: 'receiver',
      }],
    where: { id },
    attributes: ['name', 'about', 'photo', 'city', 'age', 'social', 'pets', 'habits', 'drivLic', 'transport', 'telegram', 'phone'],
  });
  // console.log(oneInfo);
  res.json(oneInfo);
});

router.get('/alltripsuser/:id', async (req, res) => {
  const { id } = req.params;
  const allTrips = await Trip.findAll({ where: { userId: id } });
  res.json(allTrips);
});

router.get('/allcoments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const allComents = await Rating.findAll({
      include: { model: User, as: 'authorId' },
      where: { userId: id },
    });
    res.json(allComents);
  } catch (e) {
    console.log(e);
  }
});

router.post('/newcoment/:id', async (req, res) => {
  const { id } = req.params;
  // console.log('BODYY', req.body);
  const { text, stars, photo } = req.body;
  const newRating = await Rating.create({
    text, photo, stars, userId: id, author: req.session.userId,
  });
  res.json(newRating);
});

module.exports = router;
