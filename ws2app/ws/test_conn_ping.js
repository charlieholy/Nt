let WebSocket = require('ws');
var url = require('../common/com').url
//url = "ws://192.168.154.139:12389"
var cmd = {
    "cmd":"ping"
}
const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());

    var sss = function () {
        socket.send(JSON.stringify(cmd));
    }
    sss();
    setInterval(sss,5000);
    //socket.send("ping");
};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};