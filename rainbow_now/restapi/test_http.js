var http = require("http");


var options = {
    hostname: 'localhost',
    path: '/asd',
    method: 'GET',
    port:23456
};

var req = http.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
    res.on('data', function(d) {
        console.log("data: " + d);
    });
});
req.end();
req.on('error', function(e) {
    console.error(e);
});