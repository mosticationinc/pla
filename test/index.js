var pg = require('pg');
var conString = "postgres://postgres:public@localhost:5432/pla";

pg.connect(conString, function(err, client, done) {
  if(err) {
      return console.error('error fetching client from pool', err);
  }
  client.query('SELECT testname from test where testid=$1', [1], function(err, result) {
    done();

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].testname);
  });
});