'use strict';

const faker = require('faker');
const Song = require('../../model/song');

const songMock = module.exports = {};

songMock.create = () => {
  let mock = {};

  mock.request = {
    title: faker.lorem.word(),
    lyrics: faker.lorem.paragraph(),
  };

  return Song.create(mock.request.title, mock.request.lyrics)
    .then(newSong => {
      mock.song = newSong;
      console.log(mock);
      return newSong;
    });
};

songMock.remove = () => {
  return Song.remove({});
};