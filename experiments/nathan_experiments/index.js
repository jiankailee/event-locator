var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 3000;
var leaflet = require('leaflet');

console.log("Server running");

server.listen(port, "127.0.0.1", function () {
});

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});