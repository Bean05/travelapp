const express = require('express');
const { Trip, User, Membership } = require('../db/models');
const fileMiddleware = require('../middleware/file');

const router = express.Router();

router.get('/allcards', async (req, res) => {
  const allCards = await Trip.findAll({ include: [Membership, User] });
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
    res.json(newCard);
  } catch (error) {
    console.log(error);
  }
});
router.patch('/update/:id', fileMiddleware.single('tripPhoto'), async (req, res) => {
  try {
    const { id } = req.params;
    await Trip.update(req.body, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.patch('/newmember/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const newMember = await Membership.create(
      { tripId: id, userId: req.session.userId, request: null },
    );
    // console.log('newmember ---', newMember);
    res.json(newMember);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
