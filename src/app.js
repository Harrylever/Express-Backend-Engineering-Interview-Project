require('dotenv/config');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { connect } = require('mongoose');

const indexRouter = require('./routes/index.route');
const usersRouter = require('./routes/user.route');
const optionsRouter = require('./routes/option.route');
const activeRecordRouter = require('./routes/activerecord.route');
const { mongoUri } = require('./config/config');

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

connect(mongoUri, { dbName: 'interviewDb' })
  .then(() => {
    console.log('connected to database 🚀');
  })
  .catch((err) => console.log(`MongoDB connection failed: ${err.message}`));

app.get('/', (req, res) => {
  res.redirect(301, '/api/v1');
});

app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/options', optionsRouter);
app.use('/api/v1/record', activeRecordRouter);

module.exports = app;
