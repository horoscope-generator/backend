'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
// const Song = require('../model/song');
const superagent = require('superagent');
// const lyrics = require('song.json');
// let __API_URL__ = process.env.API_URL;

const songRouter = module.exports = new Router();

//++++++++++++++++++GET+++++++++++++++++++++++

songRouter.get('/lyrics', jsonParser, (request, response, next) => {

  superagent.get(`http://www.kanyerest.xyz/api/album/graduation`)
    .then(songObject => response.send(songObject.text),
      err => response.send(err)
    );
});

//       .then(songObject => {
//         console.log('song object.result[0]', songObject.response.text.result[0]);
//         return new Song({
//           title: songObject.result[0].title,
//           lyrics: songObject.result[0].lyrics,
//         }).save();
//       })
//       .then(response => {
//         response.sendStatus(200);
//       })
//       .catch(next);
//   });