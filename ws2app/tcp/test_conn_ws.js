var net = require('net');
var crc = require('crc')
let pako = require('pako');

var HOST = '47.52.197.242';
var PORT = 12389;

var client = new net.Socket();

var req = "GET /chat HTTP/1.1\r\n\
Upgrade: websocket\r\n\
Connection: Upgrade\r\n\
Host: 47.52.197.242:12389\r\n\
Origin: http://47.52.197.242:12389\r\n\
Sec-WebSocket-Key: hj0eNqbhE/A0GkBXDRrYYw==\r\n\
Sec-WebSocket-Version: 13\r\n\r\n"

var cmd = {
    "cmd":"ping"
}

client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    client.write(req);

});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
var isf = true

client.on('data', function(data) {

    console.log('DATA rev: ' + data);
    if(isf){
        client.write(JSON.stringify(cmd))
        isf = false
    }

    // 完全关闭连接
    //client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});