const fetch = require('node-fetch');

fetch('http://www.kanyerest.xyz/api/album/graduation')
  .then(res => res.json())
  .then(res => res.result[0].title)
  .then(console.log);