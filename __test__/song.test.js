'use strict';

require('dotenv').config();

const superagent = require('superagent');
// const server = require('../lib/server');
// const songMock = require('./lib/songmock-factory');
const Song = require('../model/song');


const __API_URL__ = `http://localhost:${process.env.PORT}`;

describe('SONG router', () => {
  // beforeAll(server.start);
  // afterAll(server.stop);

  describe('GET /lyrics', () => {
    test('Should return a 200 and a song if there are no errors', () => {
      superagent.get(`${__API_URL__}/lyrics`)
        .then(response => {
          console.log('response.status', response.status);
          expect(response.status).toEqual(200);
          console.log('response.title', response.title);
          // expect(response.text).toEqual('good_morning');
        });
      // .catch(console.log);
    });
  });
});