var RabbitMQ = require('rabbitmq-node');

var rabbitmq = new RabbitMQ('amqp://eoe:eoemq2018@121.43.172.167:5672');

rabbitmq.on('message', function(channel, message) {
    console.log(message);
});

rabbitmq.on('error', function(err) {
    console.error(err);
});

rabbitmq.on('logs', function(print_log) {
    console.info(print_log);
});

rabbitmq.subscribe('nameChannel');
rabbitmq.publish('nameChannel', {message: 'Hello World'});