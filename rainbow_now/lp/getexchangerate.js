var https = require("https");

var options = {
    hostname: 'openexchangerates.org',
    path: '/api/latest.json?app_id=679d1fc3a76b428fb42ee55853e09fc0',
    method: 'GET'
};

var req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    //console.log("headers: ", res.headers);
    res.on('data', function(d) {
        console.log("" + d);
    });
});
req.end();
req.on('error', function(e) {
    console.error(e);
});