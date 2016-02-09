var socket = io(window.location.origin);
socket.on('connect', function(){
  console.log('Persistent connection!');
})

whiteboard.on('draw', function(data){ //doesn't have to be window.whiteboard because it's global?
  console.log('data in browser:', data);
  socket.emit('drawing', data);
})


