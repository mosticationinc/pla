/**
 * Module Name	: index.js
 * Copyright by	: Mostication Inc. and Most Vending Co.,Ltd.
 * Author		: Mostication Team
 * Created Date	: 18/03/2014
 * Description	: Receive web requests and responses. This file is the beginning of the application.
 */


/*
 * ---------------------------
 * Imports
 * ---------------------------
 */

//	standard packages
var http = require("http");
var express = require('express');
var passport = require('passport');
var path = require('path');


//	get configurations
var placonfig = require("./placonfig.js");


//	Internal packages
var mostlog = require("./assets/libs/mostication/nodejs/mostlog.js");


//	get controller
var auth = require('./provider/auth.js');
var payment = require('./routes/payment.js');
var register = require('./provider/register.js');	//	register controller


/*
 * ---------------------------
 * Global Definitions
 * ---------------------------
 */	

//	make web engine
var app = express();

//	set current environment. you can change this value in placonfig.js
process.env.NODE_ENV = placonfig.env.currentEnv;

/*
 * ---------------------------
 * Preinitialize
 * ---------------------------
 */

app.set('port', process.env.PORT || placonfig.webUrl.port);
app.use(express.favicon());
app.use(express.logger(placonfig.env.dev));
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

//	static content that refer to css, img, lang, libs, html
app.use(express.static(path.join(__dirname, 'public')));		//	html
app.use('/assets', express.static(__dirname + '/assets'));		//	css, img, lang, libs

passport.use(auth.local_strategy());


/*
 * ---------------------------
 * Processes
 * ---------------------------
 */

//	request mapping
app.get('/',auth.is_authenticated, payment.get);		//	first page of authenticated users
app.post('/login', passport.authenticate('local'), auth.login);
app.get('/payment/:id?', auth.is_authenticated, payment.get);

//	registering process
app.get('/register', register.beginRegister);
app.post('/registerdone', register.createUser);


//	start server
http.createServer(app).listen(app.get('port'), function () {
    mostlog.log(0, "----- Start Server -----");
    mostlog.log(0, "  Web server listening on port: " + app.get('port'));
    mostlog.log(0, "  Started time: " + Date.now());
});
