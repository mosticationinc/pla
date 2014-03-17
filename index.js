var http = require("http");
var express = require('express');
var passport = require('passport');
var path = require('path');

var mostlog = require("./assets/libs/mostication/nodejs/mostlog.js");

var auth = require('./provider/auth.js');
var payment = require('./routes/payment.js');
var register = require('./provider/register.js');	//	register controller

var app = express();

app.set('port', process.env.PORT || 80);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(__dirname + '/assets'));	//	refer to css, img, lang, libs
passport.use(auth.local_strategy());

app.get('/',auth.is_authenticated, payment.get);
app.post('/login', passport.authenticate('local'), auth.login);
app.get('/payment/:id?', auth.is_authenticated, payment.get);
app.get('/register', register.beginRegister);

http.createServer(app).listen(app.get('port'), function () {
    mostlog.log(0, "----- Start Server -----\n");
    mostlog.error("But found error\n");
    mostlog.log(100, "But it's ok\n");
    mostlog.log(1, "----- end content ------\n");
});