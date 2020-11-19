let WebSocket = require('ws');
var url = require('../common/com').url
url = "ws://192.168.154.139:12389"
console.log("url " + url)
const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
};
socket.onmessage = function (event) {
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};