var express = require( 'express' );
var app = express();

app.use(function(request, response, next){
	console.log(request.method, request.path);
	next(); 
});

app.use('/special',function(request, response, next){
	console.log("you reached the special area.");
	next(); 
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/news', function (req, res) {
  res.send('This section is for news!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

