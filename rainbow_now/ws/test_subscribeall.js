let WebSocket = require('ws');

var url = require('../common/com').url
//url = "ws://localhost:23456"
var suuid = "01234567890123456789012345678912"
var sub = {"cmd":"subscribeall","data": {"subsribeTick":true} }

const socket = new WebSocket(url);
socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
    socket.send(suuid + JSON.stringify(sub));
};
socket.onmessage = function (event) {
    let raw_data = event.data;
   // console.log(raw_data);

    var data = raw_data.substr(32,raw_data.length)
    var j_d = JSON.parse(data);
    var data = j_d.data;
    if(data)
    {
        if(data.lp == "okex" && data.channel == "tick")
        {
            console.log(raw_data)
        }

    }

};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};