const express = require('express');
const { Trip, User, Membership } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const allMembers = await Membership.findAll(
    { include: [{ model: Trip, include: [User] }, User] },
  );
  // console.log(allMembers);
  //   const allMembers = await Membership.findAll({ include: User });
  res.json(allMembers);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const newD = await Membership.update({ request: req.body.status }, { where: { id } });
    console.log(newD);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const allMembers = await Membership.findAll(
//     { where: { userId: id } },
//   );
//   console.log(allMembers);
//   //   const allMembers = await Membership.findAll({ include: User });
//   res.json(allMembers);
// });

module.exports = router;
