var express = require('express'),
  port = process.env.PORT || 3000,
  http = require('http').Server(app),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Annotation = require('./api/models/annotationModel'),
  fs = require('fs'),
  app = express(),
  GeoJSON = require('geojson');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Annotationsdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

var routes = require('./api/routes/annotationRoutes');
routes(app);

var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
})