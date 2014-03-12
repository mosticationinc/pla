var http = require("http");
var mostlogModule = require("../assets/libs/mostication/nodejs/mostlog.js");
var mostlog = mostication.nodejs.mostlog;

http.createServer(function(request, response) {
	mostlog.log(0, "----- Start content -----\n");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	mostlog.error("this is error\n");
	mostlog.log(100,"this message does not appear\n");
	response.end();
	mostlog.log(1, "----- end content ------\n");

}).listen(8888);