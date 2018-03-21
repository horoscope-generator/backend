'use strict';

const mongoose = require('mongoose');

const horoscopeSchema = mongoose.Schema({
  aries: {
    type: Array,
    required: true,
  },
  taurus: {
    type: Array,
    required: true,
  },
  gemini: {
    type: Array,
    required: true,
  },
  cancer: {
    type: Array,
    required: true,
  },  
  leo: {
    type: Array,
    required: true,
  },  
  virgo: {
    type: Array,
    required: true,
  },  
  libra: {
    type: Array,
    required: true,
  },  
  scorpio: {
    type: Array,
    required: true,
  },
  sagittarius: {
    type: Array,
    required: true,
  }, 
  capricorn: {
    type: Array,
    required: true,
  }, 
  aquarius: {
    type: Array,
    required: true,
  },
  pisces: {
    type: Array,
    required: true,
  },
});

const Horoscope = module.exports = mongoose.model('horoscope', horoscopeSchema);