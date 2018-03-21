'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const httpErrors = require('http-errors');
const Song = require('../model/song');
const superagent = require('superagent');

const songRouter = module.exports = new Router()
;

//++++++++++++++++++GET+++++++++++++++++++++++

songRouter.post('/lyrics', (request, response, next) => {
  if(!request.title || !request.lyrics) {
    return next(new httpErrors(404, '__ERROR__ Not Found'));
  }

  return superagent.get(`http://www.kanyerest.xyz/api/album/graduation`)
    .then(response => {
      return response.body;
    })
    .then(songObject => {
      return new Song ({
        ...request.body,
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
  Song.findOne({content: request.lyrics})
    .then(song => response.json(song))
    .catch(next);
});