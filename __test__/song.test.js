'use strict';

require('dotenv').config();

const superagent = require('superagent');
const server = require('../lib/server');


const __API_URL__ = `http://localhost:${process.env.PORT}`;

describe('SONG router', () => {
  beforeAll(server.start);
  afterAll(server.stop);

  describe('POST /songs', () => {
    test('Should return a 200 and a song if there are no errors', () => {
      
      
    });
  });
});