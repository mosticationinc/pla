var http = require("http");
var express = require('express');
var passport = require('passport');
var path = require('path');

var mostlogModule = require("../assets/libs/mostication/nodejs/mostlog.js");
var mostlog = mostication.nodejs.mostlog;

var auth = require('./provider/auth.js');
var payment = require('./routes/payment.js');

var app = express();

app.set('port', process.env.PORT || 8080);
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
passport.use(auth.local_strategy());

app.post('/login', passport.authenticate('local'), auth.login);
app.get('/payment/:id?', auth.is_authenticated, payment.get);

http.createServer(app).listen(app.get('port'), function () {
    mostlog.log(0, "----- Start content -----\n");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    mostlog.error("this is error\n");
    mostlog.log(100, "this message does not appear\n");
    response.end();
    mostlog.log(1, "----- end content ------\n");
});
