'use strict';

require('dotenv').config();
const server = require('./lib/server');

server.start(
  console.log(`Server is running on PORT: ${process.env.PORT}`)
);