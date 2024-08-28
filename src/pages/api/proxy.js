const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors({
    origin: 'http://localhost:3001',
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

app.get('/api/proxy', async (req, res) => {
    const username = req.query.user;
    const apiKey = 'YRHPBE1QdUiWkU4gT/5VUX9cI8VTET6HQcs/+5JmBQ2bq5bWZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSXNJbU4wZVNJNklrcFhWQ0o5LmV5SmlZWE5sUVhCcFMyVjVJam9pV1ZKSVVFSkZNVkZrVldsWGExVTBaMVF2TlZaVldEbGpTVGhXVkVWVU5raFJZM012S3pWS2JVSlJNbUp4TldKWElpd2liM2R1WlhKSlpDSTZJamN5TWpreE9EY3pNakFpTENKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2laWGh3SWpveE56STBOVEExTmpJeExDSnBZWFFpT2pFM01qUTFNREl3TWpFc0ltNWlaaUk2TVRjeU5EVXdNakF5TVgwLmc4SEZjQ0hmR2Q2NEs3ay1QRjhzaG9uLWhXT0hRVVJFZEpDRVJsUlhkZUxBOUYyNWhIVmRGQjJEbGJJa1VaOExILXFUdld4ZDFtSzNOX0wxWnZvN1FobEVKU3g0dmV6WTlpN3NLdWlFcTV1T25tOWlWeFFXNTBRaVdzOTdDZW1UdzNmXzVBbWxkUGxaak9Sb01JVS1GbWFVektLX3EzWUV3Wjh0X2xDU016WFNhb19uNkNCV2prTUdkckRsSmI2cWpmSUJEU1pDNXE0QW00R2h2R2pxOHdGY2UwaUlWWGZEYmhYMS1wYzU1UkpuNnloZndJZkF1TEkzQWc4MWJJZXAtVEhNc0hOb2ptMHA3dllfQm1PSy1Hc0ZFZ0dNXzAyVEtqWm9EU2dXSlJaeC04dlJiNmRWSlBGSl9HZVdRSTh5RUl0LVAzTmVRQnhGcV92VjloUk5oZw==';

    if (!username || username.trim() === '') {
        res.status(400).json({ error: 'Username is required' });
        return;
    }

    if (cache[username]) {
        console.log(`Returning cached data for username: ${username}`);
        res.json(cache[username]);
        return;
    }

    try {
        await delay(10000); // Увеличенная задержка перед запросом

        const userIdResponse = await fetch(`https://users.roblox.com/v1/users/search?keyword=${username}`, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
            }
        });

        if (userIdResponse.status === 429) {
            console.log('Rate limit hit, retrying after delay...');
            res.status(429).json({ error: 'Rate limit exceeded, please try again later.' });
            return;
        }

        const userIdData = await userIdResponse.json();

        if (userIdResponse.status === 404 || !userIdData.data || userIdData.data.length === 0) {
            res.status(404).json({ error: 'No users found' });
            return;
        }

        const users = userIdData.data;

        cache[username] = { data: users };
        res.json({ data: users });

    } catch (error) {
        console.error('API Request Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => {
    console.log('Proxy server is running on port 3001');
});
