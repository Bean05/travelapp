const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const fileMiddleware = require('../middleware/file');

const router = express.Router();

router.post('/signup', fileMiddleware.single('photo'), async (req, res) => {
  const {
    name, email, password, phone, social,
  } = req.body;
  if (name && email && password && phone && social
  ) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name,
          password: await bcrypt.hash(password, 10),
          phone,
          social,
          photo: req.file.filename,
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.hashpass;
        req.session.user = sessionUser;
        req.session.userId = sessionUser.id;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      // console.log(e);
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
        req.session.userId = sessionUser.id;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      // console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.get('/session', (req, res) => {
  res.json(req.session);
});

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const allInfo = await User.findOne({ where: { id } });
  res.json(allInfo);
});

router.post('/user/:id', async (req, res) => {
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

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const oneInfo = await User.findOne({
    where: { id },
    attributes: ['name', 'about', 'photo', 'city', 'age', 'social', 'pets', 'habits', 'drivLic', 'transport', 'telegram', 'phone'],
  });
  res.json(oneInfo);
});

module.exports = router;
