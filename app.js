
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

/**
 * SET UP ROUTES
 */

//Omnibar routes
var index = require('./routes/index');
var help = require('./routes/help');
var history = require('./routes/history');
var payment = require('./routes/payment');
var settings = require('./routes/settings');

//Additional routes
var cal = require('./routes/calendar');
var map = require('./routes/map');
var vehicle = require('./routes/vehicle');


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
app.get('/', index.view);
app.get('/payment', payment.view);
app.get('/settings', settings.view);
app.get('/help', help.view);
app.get('/history', history.view);

//Additional routes
app.get('/calendar', cal.view);
app.get('/map', map.view);
app.get('/vehicle', vehicle.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
