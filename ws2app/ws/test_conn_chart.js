let WebSocket = require('ws');
let pako = require('pako');
var url = require('../common/com').url  //test_conn_depth.js
//url = "ws://192.168.154.139:12389"
var cmd =  { "cmd":"chart",
    "period": 1,
    "bar":3,//add  del
    "symbol":"ETH_BTC"}
const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    socket.send(JSON.stringify(cmd));
};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);

    var b64 = new Buffer(raw_data, 'base64')
    var json = pako.inflate(new Uint8Array(b64), {to: 'string'});
    var sss = decodeURIComponent(json)

    console.log("data: " + json);

};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};