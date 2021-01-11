const mqtt = require('async-mqtt');

const client = mqtt.connect('mqtt://test.mosquitto.org:1883');

console.info('topic:', process.argv[2]);
console.info('message:', process.argv[3]);

const topic = process.argv[2];
const message = process.argv[3];

// do note that async-mqtt can only be used for publishing and not as a consumer
const publish = async () => {
    // publish a message
    await client.publish(topic, message);
    console.info('Published..');
    //client, close connection
    await client.end();
};

// wait for connection
client.on('connect', publish)
