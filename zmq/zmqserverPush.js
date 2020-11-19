// producer.js
var zmq = require('zmq')
    , sock = zmq.socket('push');

sock.bindSync('tcp://0.0.0.0:3000');
console.log('Producer bound to port 3000');
var num =0;
setInterval(function(){
    var sn = 'sending work' + num;
    num ++;
    console.log(sn);
    sock.send(sn);
}, 500);

sock.on('message', function(msg){
    console.log('push rev msg: %s', msg.toString());
});