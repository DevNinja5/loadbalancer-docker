var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello from server 1\n');
 }).listen(5001);
 
 console.log('Server running at http://127.0.0.1:5001/');