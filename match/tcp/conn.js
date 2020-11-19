var net = require('net');
var crc = require('crc')
let pako = require('pako');

var HOST = '192.168.100.249';
//HOST = '47.52.197.242'
HOST = '127.0.0.1'
var PORT = 8004;
//PORT = 12388

var client = new net.Socket();

//magicNyxV0.114{"cmd":"ping"}

//网络是大端字节序

var contentj = {
    "cmd":"depth",
    "code":0,
    "size":20,                 //5,10,20  默认是20
}
var s_con = JSON.stringify(contentj);
var s_len = s_con.length;

console.log("s_con: " + s_con)

client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    client.write(s_con);

});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {

    console.log('DATA: ' + data);


    // 完全关闭连接
    //client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});