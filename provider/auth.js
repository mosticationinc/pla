var async = require('async');
var passport = require('passport');
var local_strategy = require('passport-local').Strategy;
var facebook_strategy = require('passport-facebook').Strategy;
var mostlog = require('../assets/libs/mostication/nodejs/mostlog.js');
var model = require('../models');

exports.login = function (req, res) {
    res.redirect('/payment');
};

exports.logout = function (req, res) {
    res.logout();
    res.end('');
};

exports.local_strategy = function () {
    return new local_strategy(function (user, password, done) {
        do_login(user, password, done);
    });
};

exports.is_authenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.writeHead(301, {Location: 'login.html'});
        res.end();
    }
};

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    done(null, id);
});

//	check the given email (logingInEmail) and password (logingInPassword)
//
//	Parameters:
//		- (Str) logingInEmail = logging-in email
//		- (Stf) logingInPassword = logging-in password
//		- (function) done = TODO: I don't know about this function, so fixed it later. (Tum)
function do_login(logingInEmail, logingInPassword, done) {
	
	mostlog.log(5, "Checking log-in request...");
	mostlog.log(5, "  email = " + logingInEmail);
	mostlog.log(5, "  password = " + logingInPassword);
	
	//	look up given email
	model.User.find({ where: {email: logingInEmail} })
	.success(function(user) {
		
		//	if there is a user
		if(typeof(user)!="undefined" && user != null) {
		
			//	if there is a user
			mostlog.log(5, "Yeah! found a user");
			mostlog.log(5, "  user = " + JSON.stringify(user));
			mostlog.log(5, "  email = " + user.email);
			mostlog.log(10, "  full name = " + user.getFullName());
			mostlog.log(5, "  id = " + user.id);
		
			//	compare password.
			//	if logingInPassword is the right password, done!
			//	else, show password wrong error message.
			if(user.comparePassword(logingInPassword)==true) {
				done(null, {
					id: user.id,
				});
			} else {
				//	wrong password
				mostlog.log(5, "Wrong password!");
				
				//	TODO: please, handle this case
				done();
			}
		
		//	if there is no user
		} else {
			
			mostlog.log(5, "Sorry! There is no user that email is " + logingInEmail);
			
			//	TODO: please, handle this case
			done();
		}
		
	})
	.error(function(errors) {
		
		mostlog.error("Something error at do_login()",true);
		mostlog.error(errors.stack);
		
		//	TODO: please, handle this case
		done();
	});
	
}
