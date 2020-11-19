let WebSocket = require('ws');
var url = require('../common/com').url
url = "ws://192.168.154.139:12389"
url = "ws://47.75.144.95:12389"
url = "ws://localhost:12389"
let pako = require('pako');
var cmd =  { "cmd":"ticks",
    "channel":"add",             //add  del
    "symbols":["BTC_USDT"]}

var cmd2 =  { "cmd":"ticks",
    "channel":"del",             //add  del
    "symbols":["BTC_USDT","EOS_BTC"]}

const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    socket.send(JSON.stringify(cmd));

//    var unsub = function () {
//        socket.send(JSON.stringify(cmd2));
//    }

//    setTimeout(unsub,2000);

};
socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);

    var b64 = new Buffer(raw_data, 'base64')
    var json = pako.inflate(new Uint8Array(b64), {to: 'string'});
    var sss = decodeURIComponent(json)

    console.log("sss: " + sss)

};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};
