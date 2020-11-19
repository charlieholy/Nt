var zookeeper = require('node-zookeeper-client');

var client = zookeeper.createClient('121.43.172.167:2181');
var path = '/chuanying/eoe2.0/rainbow/modulex2';

client.once('connected', function () {
    console.log('Connected to the server.');

    client.create(path, function (error) {
        if (error) {
            console.log('Failed to create node: %s due to: %s.', path, error);
        } else {
            console.log('Node: %s is successfully created.', path);
        }

        client.close();
    });
});

client.connect();