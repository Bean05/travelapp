const express = require('express');
const { Trip, User } = require('../db/models');

const router = express.Router();

router.get('/allcards', async (req, res) => {
  const allCards = await Trip.findAll({ include: User });
  //   console.log('SERVER', allCards);
  res.json(allCards);
});

module.exports = router;
