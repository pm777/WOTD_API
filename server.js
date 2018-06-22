
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Word = require('./api/models/wordsModels'), //created model loading here
  bodyParser = require('body-parser');

  // mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WordListdb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//to redirect a wrong route
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/wordsRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Word of the day RESTful API server started on: ' + port);
