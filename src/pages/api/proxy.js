const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'x-api-key']
}));

app.get('/api/proxy', async (req, res) => {
    const username = req.query.user;
    const apiKey = 'YRHPBE1QdUiWkU4gT/5VUX9cI8VTET6HQcs/+5JmBQ2bq5bWZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSXNJbU4wZVNJNklrcFhWQ0o5LmV5SmlZWE5sUVhCcFMyVjVJam9pV1ZKSVVFSkZNVkZrVldsWGExVTBaMVF2TlZaVldEbGpTVGhXVkVWVU5raFJZM012S3pWS2JVSlJNbUp4TldKWElpd2liM2R1WlhKSlpDSTZJamN5TWpreE9EY3pNakFpTENKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2laWGh3SWpveE56STBOVEExTmpJeExDSnBZWFFpT2pFM01qUTFNREl3TWpFc0ltNWlaaUk2TVRjeU5EVXdNakF5TVgwLmc4SEZjQ0hmR2Q2NEs3ay1QRjhzaG9uLWhXT0hRVVJFZEpDRVJsUlhkZUxBOUYyNWhIVmRGQjJEbGJJa1VaOExILXFUdld4ZDFtSzNOX0wxWnZvN1FobEVKU3g0dmV6WTlpN3NLdWlFcTV1T25tOWlWeFFXNTBRaVdzOTdDZW1UdzNmXzVBbWxkUGxaak9Sb01JVS1GbWFVektLX3EzWUV3Wjh0X2xDU016WFNhb19uNkNCV2prTUdkckRsSmI2cWpmSUJEU1pDNXE0QW00R2h2R2pxOHdGY2UwaUlWWGZEYmhYMS1wYzU1UkpuNnloZndJZkF1TEkzQWc4MWJJZXAtVEhNc0hOb2ptMHA3dllfQm1PSy1Hc0ZFZ0dNXzAyVEtqWm9EU2dXSlJaeC04dlJiNmRWSlBGSl9HZVdRSTh5RUl0LVAzTmVRQnhGcV92VjloUk5oZw==';

    if (!username || username.trim() === '') {
        res.status(400).json({ error: 'Username is required' });
        return;
    }

    try {
        // Assuming this is the correct endpoint and method
        const userIdResponse = await fetch(`https://apis.roblox.com/usernames/users`, {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usernames: [username] })
        });

        if (!userIdResponse.ok) {
            const errorText = await userIdResponse.text();
            throw new Error(`Error getting user ID: ${userIdResponse.status} ${userIdResponse.statusText} - ${errorText}`);
        }

        const userIdData = await userIdResponse.json();
        const userId = userIdData.data[0]?.id;  // Adjust based on actual API response structure

        if (!userId) {
            res.status(404).json({ error: 'User ID not found' });
            return;
        }

        const apiUrl = `https://apis.roblox.com/cloud/v2/users/${userId}`;
        console.log(`Requesting URL: ${apiUrl}`);

        const response = await fetch(apiUrl, {
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error('API Request Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Proxy server is running on port 3000');
});
