let WebSocket = require('ws');
var url = require('../common/com').url
let pako = require('pako');
url = "ws://192.168.154.139:12389"
var cmd =  { "cmd":"exRate"}

const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    socket.send(JSON.stringify(cmd));



};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);



};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};