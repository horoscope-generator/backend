'use strict';

const {Router} = require('express');
const bodyParser = require('body-parser');
const httpErrors = require('http-errors');
const Song = require('../model/song');
const superagent = require('superagent');

const songRouter = module.exports = new Router();

//++++++++++++++++++GET+++++++++++++++++++++++

songRouter.post('/lyrics', bodyParser, (request, response, next) => {
  if(!request.title || !request.lyrics) {
    return next(new httpErrors(404, '__ERROR__ Not Found'));
  }

  return superagent.get(`http://www.kanyerest.xyz/api/album/graduation`)
    .then(response => {
      return response;
    })
    .then(songObject => {
      return new Song ({
        title: songObject.title,
        lyrics: songObject.lyrics,
      }).save()
        .then(song => response.json(song))
        .catch(next);
    })
    .catch(next);
});


songRouter.get('/lyrics', (request, response, next) => {
  if(!request.song)
    return next(new httpErrors(404, '__ERROR__ Not Found'));

  Song.findOne({lyrics: request.lyrics})
    .then(song => response.json(song))
    .catch(next);
});