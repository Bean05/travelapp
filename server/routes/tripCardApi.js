const express = require('express');
const { Trip, User } = require('../db/models');
const fileMiddleware = require('../middleware/file');

const router = express.Router();

router.get('/allcards', async (req, res) => {
  const allCards = await Trip.findAll({ include: User });
  //   console.log('SERVER', allCards);
  res.json(allCards);
});

// создаем карточку
router.post('/create', fileMiddleware.single('tripPhoto'), async (req, res) => {
  try {
    const {
      tripName, date, cityStart, cityWhere, aboutMembers, aboutTrip, membersCount,
    } = req.body;
    const { userId } = req.session;
    const newCard = await Trip.create({
      tripPhoto: req.file.filename,
      userId,
      tripName,
      date,
      cityStart,
      cityWhere,
      aboutMembers,
      aboutTrip,
      membersCount,
    });
    console.log('NEEEEWCAAARD', newCard);
    res.json(newCard);
  } catch (error) {
    console.log(error);
  }
  // const { input } = req.body;
  // const newCard = await Trip.create({ tripName: input }); // прописать все поля
  // res.json(newCard);
});

module.exports = router;
