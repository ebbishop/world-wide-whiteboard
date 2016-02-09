var socket = io(window.location.origin);
socket.on('connect', function(){
  console.log('Persistent connection!');
})

// window.whiteboard.on('draw', function(){
//   console.log('drew something');
// })


