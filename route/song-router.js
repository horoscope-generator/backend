'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const httpError = require('http-errors');
const Song = require('../model/song');

const songRouter = module.exports = new Router()
;

//++++++++++++++++++GET+++++++++++++++++++++++

songRouter.get('/lyrics', (request, response, next) => {
  if(!request.content) {
    return next(new httpError(404, '__ERROR__ Not Found'));
  }

  return response.send(request.content);
});