// const express = require('express');
// const { Trip, User, Membership } = require('../db/models');

// const router = express.Router();

// router.get('/', async (req, res) => {
//   // const allMembers = await Membership.findAll(
//   //   { include: [{ model: Trip, include: [User] }, User] },
//   // );
//   // console.log(allMembers);
//   const allMembers = await Membership.findAll({ include: User });
//   res.json(allMembers);
// });

// module.exports = router;