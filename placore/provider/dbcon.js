var pg = require('pg');

exports.connect = function (callback) {
    var conString = "postgres://postgres:public@localhost:5432/pla";

    pg.connect(conString, function (err, client, done) {
        callback(err, client, done);
    });
};
