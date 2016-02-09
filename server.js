var path = require('path');

var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();


var socketio = require('socket.io');
server.on('request', app); //http server

var io = socketio(server); //creates new connection for websockets

io.on('connection', function(socket){
  console.log('A client is connected!');
  console.log(socket.id);
    socket.on('disconnect', function(){
      console.log('bye');
    })
});


server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
