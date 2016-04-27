module.exports = function(io) {

	var express = require('express');
	var router= express.Router();
	var tweetBank= require('../tweetBank');
	var bodyParser = require('body-parser')

	router.get('/', function(request, respond){
		var tweets = tweetBank.list();
	  	respond.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
	});

	// say that a client GET requests the path /users/nimit
	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name: name} );
	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true } );
	});

	router.get('/tweets/:id', function(req, res) {
	  var id = req.params.id;
	  var list = tweetBank.find( { id: +(id)  } );
	  console.log(list);
	  res.render( 'index', { title: 'Twitter.js - Posts by '+id, tweets: list } );
	});

	router.use(bodyParser.json())
	router.use(bodyParser.urlencoded({ extended: false }))

	router.post('/tweets', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  res.redirect('/');
	});

	return router
};
