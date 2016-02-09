var socket = io(window.location.origin);


socket.on('connect', function(){
  console.log('Persistent connection!');
})

socket.on('broadcastData', function(start, end, color){
  whiteboard.draw(start, end, color);
})

whiteboard.on('draw', function(start, end, color){ //doesn't have to be window.whiteboard because it's global?
  socket.emit('drawing', start, end, color);
})
