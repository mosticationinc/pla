var provider = require('../provider');

exports.get = function (req, res) {
    var user_id = req.params.id === undefined ? req.user.id : req.params.id;
    provider.db_con.connect(function (err, client, done) {
        if (err) {
            res.send(500, err.message);
        } else {
            client.query('SELECT $1::int AS testnum', ['55'], function (err, result) {
                done();
                
                if(err)
                    res.send(500, err.message);
                else
                {
                    var ret_string = 'payment info:' + user_id + '&' + result.rows[0].testnum;
                    res.send(ret_string);
                }
            });
        }
    });
};
