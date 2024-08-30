const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const robloxBat = require('roblox-bat');
const cryptoJs = require('crypto'); 
const app = express();


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'x-api-key']
}));

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

app.get('/api/name', async (req, res) => {
    
});

app.listen(3001, () => {
    console.log('Proxy server is running on port 3001');
});
