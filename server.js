var path = require('path');

var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();


var socketio = require('socket.io');
server.on('request', app); //http server

var io = socketio(server); //creates new connection for websockets

io.on('connection', function(socket){

  // socket.broadcast.emit('message', 'Someone else just connected');

  console.log('A client is connected!', socket.id);

  socket.on('disconnect', function(){
    console.log('bye');
  });

  socket.on('drawing', function(start, end, color){ //event name in string must match emitted event in app.js
    socket.broadcast.emit('broadcastData', start, end, color);
  })
});



server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
