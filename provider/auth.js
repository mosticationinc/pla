var async = require('async');
var passport = require('passport');
var local_strategy = require('passport-local').Strategy;
var facebook_strategy = require('passport-facebook').Strategy;

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

function do_login(email, password, done) {
    done(null, {
        id: 1,
    });
}
