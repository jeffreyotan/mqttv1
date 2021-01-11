const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://test.mosquitto.org:1883');

// wait for connection
client.on('connect', () => {
    console.info('Connected');
    // subscribe to a topic
    client.subscribe('weirdtopicv79', (err, granted) => {
        // check if there is any error
        if(err != null) {
            console.error('Subscription error: ', err);
            process.exit(-1);
        }
        console.info('Granted: ', granted);

        // listen to incoming messages from the topic
        client.on('message', (topic, payload) => {
            const data = payload.toString();
            console.info(`topic: ${topic}, payload: ${data}`);
        });
    });
});