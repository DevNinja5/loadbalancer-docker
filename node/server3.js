var http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello from server 3\n');
 }).listen(5003);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:5003/');