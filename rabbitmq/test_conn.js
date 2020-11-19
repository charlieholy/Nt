var amqp = require('amqp');
var connection = amqp.createConnection({ url: "amqp://eoe:eoemq2018@121.43.172.167:5672"},
    {defaultExchangeName: "exchange"});

// add this for better debuging

//交换机名称:    exchange
//委托单发送队列: newTrade
//委托单接收队列: upTradeDetail
//行情 match-nyx: matchToNyx
//行情 nyx-match: nyxToMatch

connection.on('error', function(e) {
    console.log("Error from amqp: ", e);
});

// Wait for connection to become established.
connection.on('ready', function () {
    // Use the default 'amq.topic' exchange
    console.log("ready!");
    connection.queue('my-queue', function (q) {
        // Catch all messages
        q.bind('#');

        // Receive messages
        q.subscribe(function (message) {
            // Print messages to stdout
            console.log(message);
        });
    });
});