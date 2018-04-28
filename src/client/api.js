import io from 'socket.io-client';
const socket = io('http://localhost:3000');

function test(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function getUserInfo(userId, cb) {
  socket.on(userId, user => cb(null, user));
  socket.emit('getUserInfo', userId);
}

export { test, getUserInfo }