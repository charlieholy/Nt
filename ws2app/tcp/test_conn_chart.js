var net = require('net');
var crc = require('crc')
let pako = require('pako');

var HOST = '192.168.154.139';
HOST = '47.52.197.242'
HOST = '47.75.144.95'
var PORT = 12388;

var client = new net.Socket();

//magicNyxV0.114{"cmd":"ping"}

//网络是大端字节序

var contentj = {"cmd":"ping"}
var contentj =  { "cmd":"chart",
    "period":1,
    "bar":3,//add  del
    "symbol":"ETH_BTC"}
var s_con = JSON.stringify(contentj);
var s_len = s_con.length;

var sss_head = 'magicNyxV0.1'

console.log("s_len: " + s_len)

var bufh = new Buffer(100);
bufh.write(sss_head)
bufh.writeUIntBE(s_len,  12, 2);
bufh.write(s_con,14,s_len);

var crc_buf = bufh.slice(0,14+s_len);
var crcres = crc.crc32(crc_buf)
console.log(crcres.toString());

bufh.writeUIntBE(crcres,14+s_len, 4);
console.log(bufh);

var send_buf = bufh.slice(0,14+s_len+4);


client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    client.write(send_buf);

});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {

    console.log('DATA: ' + data);

    var res_data = new Buffer(data)
    var len = res_data.readUIntBE(12, 2);
    console.log("len: " + len)
    var u_data = res_data.slice(14,14+len)
    var json = pako.inflate(new Uint8Array(u_data), {to: 'string'});
    console.log("json: " + json)

    // 完全关闭连接
    //client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});