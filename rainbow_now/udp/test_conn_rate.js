const dgram = require('dgram');
const client = dgram.createSocket('udp4');

client.on('close',()=>{
    console.log('socket已关闭');
});

client.on('error',(err)=>{
    console.log(err);
});
client.on('message',(msg,rinfo)=>{
    if(msg=='exit') client.close();
;
console.log(`receive message from ${rinfo.address}:${rinfo.port}  ` + msg);
});
//47.75.63.70
var i=999;
var snd = function send() {
    i++
   // client.send('exchangeRate',23457,'47.75.63.70');
    client.send('exchangeRate',23457,'127.0.0.1');

}

var unsnd = function send() {
    i++
    client.send('unsubScribe',23457,'47.75.63.70');

}
snd();
//snd();
//setTimeout(unsnd,30000);


//setInterval(snd,10)
