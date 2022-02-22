const redis = require('redis');

const client = redis.createClient();

client.on('ready', function(res) {
    console.log(`[redis.ready] ready]`);
});

client.on('end', function() {
    console.log(`[redis.client] end`)
});

client.on('error', function(err) {
    console.log(`[redis.client] error`);
});

client.on('connect', function() {
    console.log(`[redis.client] connect successfully`);
});

let init = false;

module.exports = async function() {
    if (init) {
        init = true;
        return client;
    }

    await client.connect();

    await client.set('str-test', 'hello');

    console.log(await client.get('str-test'));

    return client;
};
