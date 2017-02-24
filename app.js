
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

/**
 * SET UP ROUTES
 */

//Omnibar routes
var index = require('./routes/index');
var help = require('./routes/help');
var history = require('./routes/history');
var settings = require('./routes/settings');

//Additional routes
var vehicle = require('./routes/vehicle');
var login = require('./routes/login');
var confirmation = require('./routes/confirmation');
var equipment = require('./routes/equipment');
var request = require('./routes/request');
var nowRide = require('./routes/nowRide');
var nowDrive = require('./routes/nowDrive');

//DB CONNECTION
var local_database_name = 'WeHaul';
var local_database_uri  = 'mongodb://localhost/' + local_database_name;
var database_uri = process.env.MONGOLAB_URI || local_database_uri;
mongoose.connect(database_uri);


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/**
 * RENDER ROUTES
 */

//Omnibar routes
app.get('/home', index.view);
app.get('/settings', settings.view);
app.post('/settings', settings.update);
app.get('/help', help.view);
app.get('/history', history.view);

//Additional routes
app.get('/vehicle', vehicle.view);

app.get('/', login.view);
app.post('/', login.login);
app.get('/register', login.register);
app.post('/register', login.createUser);

app.get('/confirmation', confirmation.view);
app.get('/equipment', equipment.view);

app.get('/request', request.view);
app.get('/movenow-rider', nowRide.view);
app.get('/movenow-driver', nowDrive.view);
app.post('/movenow-driver', nowDrive.addRide);
app.get('/movenow-rider-submitted', nowRide.submitted);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
