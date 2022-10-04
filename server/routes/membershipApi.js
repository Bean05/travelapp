const express = require('express');
const { Trip, User, Membership } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allMembers = await Membership.findAll(
    { include: [{ model: Trip, include: [User] }, User] },
  );
  res.json(allMembers);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Membership.update({ request: req.body.status }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
