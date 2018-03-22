'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
cont httpErrors = require('http-errors');
const Horoscope = require('../model/horoscope');
const superagent = require('superagent');

const horoscopeRouter = module.exports = new Router();

//++++++++++++++++++GET+++++++++++++++++++++++
