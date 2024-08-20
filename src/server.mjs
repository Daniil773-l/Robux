// server.mjs
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/:username', async (req, res) => {
    const username = req.params.username;
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
        const response = await fetch(`https://apis.roblox.com/cloud/v2/users/${username}`, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Что-то пошло не так' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
