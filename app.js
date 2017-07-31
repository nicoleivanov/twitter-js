const express = require( 'express' );
const app = express(); // creates an instance of an express application
var http = require('http');

var server = http.createServer();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

server.listen(3000, function() {
    console.log("server listening on port 3000");
})

