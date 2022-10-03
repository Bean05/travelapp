const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const userRouter = require('./routes/userRouter');
const tripCardApi = require('./routes/tripCardApi');
const tripSearchRouter = require('./routes/tripSearchRouter');
// const membershipApi = require('./routes/membershipApi');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.json({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/api/users', userRouter);
app.use('/api/trip', tripCardApi);
app.use('/api/v1', tripSearchRouter);
// app.use('/api/membership', membershipApi);


app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
