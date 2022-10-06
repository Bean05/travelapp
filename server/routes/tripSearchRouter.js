const express = require('express');
const {
  Trip, User, Sequelize, sequelize,
} = require('../db/models');
const fileMiddleware = require('../middleware/file');

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
router.put('/updateuser/:id', async (req, res) => {
  try {
    const Id = await User.findByPk(req.params.id);
    const update = await Id.update({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      social: req.body.social,
      about: req.body.about,
      age: req.body.age,
      pets: req.body.pets,
      habits: req.body.habits,
      drivLic: req.body.drivLic,
      city: req.body.city,
      transport: req.body.transport,
      telegram: req.body.telegram,
    });
    res.json(update);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
router.put('/userfoto/:id', fileMiddleware.single('photo'), async (req, res) => {
  console.log('PFOTO>>>>>', req.file);
  try {
    const Id = await User.findByPk(req.params.id);
    await Id.update({
      photo: req.file.filename,
    });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
module.exports = router;
