

// add this for better debuging

//交换机名称:    exchange
//委托单发送队列: newTrade
//委托单接收队列: upTradeDetail
//行情 match-nyx: matchToNyx
//行情 nyx-match: nyxToMatch

var amqp = require('amqp');
var connection = amqp.createConnection({ url: "amqp://eoe:eoemq2018@121.43.172.167:5672"}
    );

// Local references to the exchange, queue and consumer tag
var _exchange = null;
var _queue = null;
var _consumerTag = null;

// Report errors
connection.on('error', function(err) {
    console.error('Connection error', err);
});

// Update our stored tag when it changes
connection.on('tag.change', function(event) {
    if (_consumerTag === event.oldConsumerTag) {
        _consumerTag = event.consumerTag;
        // Consider unsubscribing from the old tag just in case it lingers
        _queue.unsubscribe(event.oldConsumerTag);
    }
});

// Initialize the exchange, queue and subscription
connection.on('ready', function() {
    console.log("ready!");
    connection.exchange('exchange', function(exchange) {
        console.log("exchange!")
        _exchange = exchange;


        connection.queue('upTradeDetail', function(queue) {
            _queue = queue;

            // Bind to the exchange
            queue.bind('matchToNyx', 'routing-key');

            // Subscribe to the queue
            queue
                .subscribe(function(message) {
                    // Handle message here
                    console.log('Got message', message);
                    queue.shift(false, false);
                })
                .addCallback(function(res) {
                    // Hold on to the consumer tag so we can unsubscribe later
                    _consumerTag = res.consumerTag;
                })
            ;
        });
    });
});

// Some time in the future, you'll want to unsubscribe or shutdown
setTimeout(function() {
    if (_queue) {
        _queue
            .unsubscribe(_consumerTag)
            .addCallback(function() {
                // unsubscribed
            })
        ;
    } else {
        // unsubscribed
    }
}, 60000);