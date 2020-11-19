// worker.js
var zmq = require('zmq')
    , sock = zmq.socket('req');

sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');

sock.on('message', function(msg){
    console.log('work: %s', msg.toString());
});

sock.send("asd");