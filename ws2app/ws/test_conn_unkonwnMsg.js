let WebSocket = require('ws');
var url = require('../common/com').url
var cmd = {
    "cmd":"ping2"
}
const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());

    var sss = function () {
        socket.send(JSON.stringify(cmd));
    }
    sss()
   // setInterval(sss,9000);
    //socket.send("ping");
};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};