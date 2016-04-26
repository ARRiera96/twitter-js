var express = require( 'express' );
var app = express();
var swig= require('swig'); 
var routes = require('./routes/');
app.use('/', routes);
app.use(express.static('public'));

// app.use(function(request, response, next){
// 	console.log(request.method, request.path);
// 	next(); 
// });

// app.use('/special',function(request, response, next){
// 	console.log("you reached the special area.");
// 	next(); 
// });

app.engine('html', swig.renderFile);
app.set('view engine', 'html'); 
swig.setDefaults({ cache: false });

// app.get('/', function (req, res) {
// 	//res.send('Hello world');
// 	//res.send("Hello World");
// 	//res.render(__dirname+'/views/index.html', {title: 'An Example'});
// // in some file that is in the root directory of our application
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// // swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
// //     res.send(output);
// // });

// res.render('index', locals);
// });


// app.get('/news', function (req, res) {
//   res.send('This section is for news!');
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// // in some file that is in the root directory of our application
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     console.log(output);
// });

