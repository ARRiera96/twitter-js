var express = require('express');
var router= express.Router(); 
var tweetBank= require('../tweetBank');

router.get('/', function(request, respond){
	var tweets = tweetBank.list();
  	respond.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router; 