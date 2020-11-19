let WebSocket = require('ws');
var url = require('../common/com').url
var suuid = "0123456789012345678" + Date.now()
url = "ws://47.75.63.70:23456"
url =  "ws://localhost:23456"
var cmd = {"cmd":"exchange_tick",
"data":{
    "sym":"LTC",
    "money":"CNY"
}}

console.log(suuid+JSON.stringify(cmd))

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