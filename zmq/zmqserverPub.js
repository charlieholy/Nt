// pubber.js
var zmq = require('zmq')
    , sock = zmq.socket('pub');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound to port 3000');
var i = 0;
setInterval(function(){
    var sn = "meow" + i;
    console.log(sn);
    i++
    sock.send(['kitty cats', sn]);
    sock.send(['get all', sn]);
}, 500);