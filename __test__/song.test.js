'use strict';

require('dotenv').config();

const superagent = require('superagent');
const server = require('../lib/server');
// const songMock = require('./lib/songmock-factory');
const Song = require('../model/song');


const __API_URL__ = `http://localhost:${process.env.PORT}`;

describe('SONG router', () => {
  beforeAll(server.start);
  afterAll(server.stop);

  describe('POST /lyrics', () => {
    test('Should return a 200 and a song if there are no errors', () => {
      return superagent.post(`${__API_URL__}/lyrics`)
        .send({
          title: 'cameron',
          lyrics: 'cameron loves movies',
        })
        .then(response => {
          expect(response.status).toEqual(200);
          // expect(response.body.title).toEqual('good_morning');
        });
    });
  });
});