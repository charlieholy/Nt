let WebSocket = require('ws');
var url = require('../common/com').url
var suuid = "01234567890123456789012345678912"
//var sub = {"cmd":"subscribe_merge_depth_withlp","data": {"subsribeTick":true} }
var sub = {"cmd":"subscribe_merge_tick","data": {"subsribeTick":true} }
const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    socket.send(suuid + JSON.stringify(sub));
};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};