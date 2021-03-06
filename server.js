var express = require('express'),
  cors = require('cors'),
  port = process.env.PORT || 3000,
  http = require('http').Server(app),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Annotation = require('./api/models/annotationModel'),
  fs = require('fs'),
  app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://xyzserver:xyzserver@ds127443.mlab.com:27443/heroku_hjlz1cm3');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/res', express.static('res'));
app.use('/panoramas', express.static('panoramas'));

app.get('/index', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/home', function(req, res){
  res.sendFile(__dirname + '/html/home.html');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/drone.html');
});

var routes = require('./api/routes/annotationRoutes');
routes(app);

var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
})