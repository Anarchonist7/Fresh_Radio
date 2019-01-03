
var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);

server.listen(3003, () => console.log('listening on *:3003'));

// The event will be called when a client is connected.


websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);


  socket.on('message', (message) => {
    data = JSON.parse(message);
    if (data.content === 'play') {
      console.log('playing');
      socket.send(JSON.stringify({type: 'message', content: false, CT: data.time, ST: Date.now()}));
    } else if (data.content === 'pause') {
      console.log('pausing');
      socket.send(JSON.stringify({type: 'message', content: true, CT: data.time, ST: Date.now()}));
    }

  });
});