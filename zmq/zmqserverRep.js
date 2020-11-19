// producer.js
var zmq = require('zmq')
    , sock = zmq.socket('rep');

sock.bindSync('tcp://0.0.0.0:3000');
console.log('Producer bound to port 3000');
var num =0;
setInterval(function(){
    var sn = 'sending work' + num;
    num ++;
    console.log(sn);
    sock.send(sn);
}, 5000000);

sock.on('message', function(msg){
    console.log('push rev msg: '+ msg);
    sock.send("kko");
});