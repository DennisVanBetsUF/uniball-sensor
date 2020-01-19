const kafka = require('kafka-node');
var gpio = require('rpi-gpio');

const client = new kafka.KafkaClient({kafkaHost: 'http://games.unifly.aero:29092'});

var Producer = kafka.Producer,
    producer = new Producer(client);

producer.send([{
            topic: 'score',
            messages: [1], //blue
	        timestamp: Date.now()
        }],(error) => console.log('score blue sent', error));
    }
});
gpio.setup(37, gpio.DIR_IN, gpio.EDGE_FALLING);
gpio.setup(13, gpio.DIR_IN, gpio.EDGE_FALLING);
console.log('Sensors ready');
