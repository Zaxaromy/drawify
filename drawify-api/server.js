const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.SERVER_URL,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('draw', (data) => {
    io.emit('draw', data);
    console.log(data);
  });

  socket.on('message', (message) => {
    io.emit('message', message); // Broadcast the message to all connected clients
    console.log(message);
    console.log('asdf');
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
