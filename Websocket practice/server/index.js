const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', socket => {
  socket.on('message', message => {
    const b = Buffer.from(message);
    console.log(b.toString());
    socket.send(`${message}`);
    console.log(message);
  });
});