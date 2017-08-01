const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweetsArr = tweetBank.list();
  res.render( 'index', { puppy: tweetsArr, name: 'Joe' } );
});

module.exports = router;