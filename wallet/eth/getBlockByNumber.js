var http = require("http");

var j_data = {
    "method" :"eth_getBlockByNumber",
    "id" : 1231231,
    "params" : ["0x123",true]
}

DEFAULT_POST_HEADERS = {
    'Content-type': 'application/json',
   // 'Authorization' : 'Basic cnVpc2h1bzpydWlzaHVv'
}
var options = {
    //hostname: '35.201.154.148',
    //port:43287,
    hostname: '127.0.0.1',
    port:8545,
    headers :DEFAULT_POST_HEADERS,
    method: 'POST'
};

var req = http.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
    var datas = [];
    var size = 0;
    res.on('data', function(d) {
        console.log("data: " + d);
        datas.push(d);
        size += d.length;
    });
    res.on("end", function () {
        var buff = Buffer.concat(datas, size);


    })
});
var sendData =  JSON.stringify(j_data);
console.log("send: " + sendData)
req.write(sendData);
req.end();

