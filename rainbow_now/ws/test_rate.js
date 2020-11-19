let WebSocket = require('ws');
var url = require('../common/com').url
url = "ws://47.75.63.70:23456"
var suuid = "01234567890123456789012345678912"
var cmd = {"cmd":"exchange_rate"}

const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    var send = suuid + JSON.stringify(cmd)
    console.log(send.length)
    console.log("send " + send)
    socket.send(send);
};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};