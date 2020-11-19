var zookeeper = require('node-zookeeper-client');
var client = zookeeper.createClient('/chuanying/eoe2.0/rainbow/modulex2'|| '121.43.172.167:2181');

client.once('connected', function () {
    client.transaction().
    create('/txn').
    create('/txn/1', new Buffer('transaction')).
    setData('/txn/1', new Buffer('test'), -1).
    check('/txn/1').
    remove('/txn/1', -1).
    remove('/txn').
    commit(function (error, results) {
        if (error) {
            console.log(
                'Failed to execute the transaction: %s, results: %j',
                error,
                results
            );

            return;
        }

        console.log('Transaction completed.');
        client.close();
    });
});

client.connect();