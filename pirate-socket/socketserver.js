
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
      console.log('playing', Date.now());
      websocket.send(JSON.stringify({type: 'message', content: false, CT: data.time, ST: Date.now()}));
    } else if (data.content === 'pause') {
      console.log('pausing', Date.now());
      websocket.send(JSON.stringify({type: 'message', content: true, MS: data.MS, CT: data.time, ST: Date.now()}));
    } else if (!isNaN(data.content)) {
      console.log('moving');
      websocket.send(JSON.stringify({type: 'next', content: data.content}));
    } else if (data.content === 'ahoy!') {
      console.log('we got a joiner!');
      websocket.send(JSON.stringify({type: 'count', content: 'ahoy!'}));
    } else if (data.content === 'avast!') {
      console.log('walk the plank ye scurvy dawg!');
      websocket.send(JSON.stringify({type: 'count', content: 'avast!'}));
    }
  });
});