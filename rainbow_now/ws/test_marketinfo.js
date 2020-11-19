let WebSocket = require('ws');
var url = require('../common/com').url
var suuid = "0123456789012345678" + Date.now()
var cmd = {"cmd":"lpinfo"}

const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    socket.send(suuid + JSON.stringify(cmd));
    //socket.send(suuid + JSON.stringify(cmd));
   // socket.send(suuid + JSON.stringify(cmd));
};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};