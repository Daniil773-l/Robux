
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { AMQPClient, AMQPQueue } = require('@cloudamqp/amqp-client');
require('dotenv').config()

const app = express();

const amqp = new AMQPClient(process.env.AMQP_DSN)
/** @type {AMQPQueue} */
let queue; 

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'x-api-key']
}));

app.once("startup", async () => { 
    console.log("Creating connections")
    const conn = await amqp.connect()
    const ch = await conn.channel()
    queue = await ch.queue(process.env.QUEUE_NAME, {durable: false})
    let returnQueue = await ch.queue(process.env.QUEUE_NAME + "_return", {durable: true})
    await returnQueue.bind("url_return", 'url_queue_return')
    const consumer = await returnQueue.subscribe({}, (msg) => {
        console.log("Fucking shit")
        let result = JSON.parse(msg.bodyString())
        cache[result.nickname] = result.data
    })
})

app.emit('startup')

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const cache = {};

// Debounce функция для ограничения количества запросов
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

app.get('/api/proxy', async (req, res) => {
    const username = req.query.user;

    if (!username || username.trim() === '') {
        res.status(400).json({ error: 'Username is required' });
        return;
    }

    if (cache[username]) {
        console.log(`Returning cached data for username: ${username}`);
        res.json(cache[username]);
        return;
    }
    
    console.log("Sending some stuff")
    await queue.publish(`{"name": "${username}"}`)
    
    while (cache[username] === undefined || cache[username] == null) { 
        console.log("WATIING")
    }
    users = cache[username] 
    res.json({ data: users });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
