const express = require('express');
const parser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));


//listen on the "connection" event for incoming socekts
io.on('connection', (socket) => {
  socket.on('chat message', (message) => {
    console.log(message)
    io.emit('chat message', message);
  });
});

http.listen(3000, function(){
  console.log(`listening on port ${port}`);
});