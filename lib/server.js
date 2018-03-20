'use strict';

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const logger = require('./logger');
const fs = require('fs-extra');
const cors = require('cors');

//+++++++++++++++++SERVER SETUP++++++++++++++++++++++++

const server = module.exports = {};

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN.split(' '),
  credentials: true,
}));

//+++++++++++++++++ROUTE SETUP++++++++++++++++++++++++

app.use(require('./middleware/logger-middleware'));

app.get('/', (request, response) => {
  response.send('Horoscope Generator Baby');
});

app.all('*', (request, response) => {
  return response.status(404).send('__404__ NOT FOUND HAHA');
});

app.use(require('./middleware/error-middleware'));

//+++++++++++++++++SERVER USE++++++++++++++++++++++++

let isServerOn = false;
let httpServer = null;

server.start = () => {
  fs.pathExists('logs/')
    .then(exists => {
      if(!exists) {
        fs.mkdir('logs/');
      }
    });

  return new Promise((resolve, reject) => {

    if(isServerOn) {
      logger.log('error', '__SERVER_ERROR__ Server is already on');
      return reject(new Error('__SERVER_ERROR__ Server is already on'));
    }
    httpServer = app.listen(process.env.PORT, () => {
      isServerOn = true;
      logger.log('verbose', `Server is listening on port: ${process.env.PORT}`);
      return resolve();
    });
  })
    .then(() => {
      mongoose.connect(process.env.MONGODB_URI);
    });
};
