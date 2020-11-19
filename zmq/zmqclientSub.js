// subber.js
var zmq = require('zmq')
    , sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('kitty cats');
sock.subscribe('get all');
console.log('Subscriber connected to port 3000');

sock.on('message', function(topic, message) {
    console.log('received a message related to:' + topic, 'containing message:' + message);
});