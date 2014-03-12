/**
 * Test postgress-node
 */

var http = require('http');
var pg = require('pg');

var conString = "postgres://postgres:admin@localhost/pla";

var server = http.createServer(function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    var handleError = function(err) {
      if(!err) return false;
      done(client);
      next(err);
      return true;
    };
    client.query('INSERT INTO Z_TEST_NODE_PG (VISTIED_DATE) VALUES ($1)', [new Date()], function(err, result) {
      if(handleError(err)) return;
      client.query('SELECT COUNT(VISTIED_DATE) AS count FROM Z_TEST_NODE', function(err, result) {
        if(handleError(err)) return;
        done();
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('You are visitor number ' + result.rows[0].count);
      });
    });
  });
})

server.listen(8889)