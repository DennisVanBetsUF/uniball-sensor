const kafka = require('kafka-node');
var gpio = require('rpi-gpio');

const client = new kafka.KafkaClient({kafkaHost: '192.168.0.144:9092'});

var Producer = kafka.Producer,
    producer = new Producer(client);

console.log('starting...');
producer.on('ready', function () {
    console.log('Data broker ready');
});

gpio.on('change', function (channel, value) {
    if (channel == 37 && value == false) {
        producer.send({
            topic: 'score',
            messages: 'red'
        });
        console.log('score red');
    }
    if (channel == 13 && value == false) {
        producer.send({
            topic: 'score',
            messages: 'green'
        });
        console.log('score green');
    }
});
gpio.setup(37, gpio.DIR_IN, gpio.EDGE_FALLING);
gpio.setup(13, gpio.DIR_IN, gpio.EDGE_FALLING);
console.log('Sensors ready');
