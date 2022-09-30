const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    name, email, password, phone, social, photo,
  } = req.body;
  if (name && email && password && phone && social && photo) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name, password: await bcrypt.hash(password, 10), phone, social, photo,
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.hashpass;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.hashpass;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.post('/page/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reqBody = req.body;
    delete reqBody.password;
    const oneInfo = await User.findOne({ where: { id } });
    Object.assign(oneInfo, reqBody);
    oneInfo.save();
    delete oneInfo.password;
    res.json(oneInfo);
  } catch (e) {
    console.log(e);
  }
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

module.exports = router;
