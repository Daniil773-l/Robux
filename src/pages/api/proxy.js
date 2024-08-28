const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
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
        const userIdResponse = await fetch(`https://users.roblox.com/v1/users/search?keyword=${username}&limit=10`, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
                "Priority": "u=1, i", 
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36", 
                'Cookies': ".ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_6FDA5CDC031DCE60825CAF024C334F6F5C6BA84B3607DBD602D2CDFAF0A2D069A4BCCEB4CCCDEFB3AA21ABBC30163453EBB17F439536C2616437C13A459673E60E84715AEE4626D27BBDFCCFD34D012C4D42D78AA586C007456FCD46559793D630B755B117B954F691463FE226F08E6F1F5455003E3047E0E202A5618CC21437EDF5B88FA9E1846A355B813B63E650DA9B2171948E6DE34D6410867C404985B0C18F784F2F91D8E60F0BE2A163E8796427733F5DCE5512960298A027514B847AD20F2E1C2EC1915E4E6FF5FC7D0631EBA53AD32FA6A7E3CA885F4EA014FD5158606AF0C21E718CCF1DAF1EE21EEF4722E9315AF2E5A097A57058914C18B80648CA8E4F973E123BE2C3AB41E6607D6CF154633267654D7B7DE2F8A4535F33C04FB8788025F1500333E1BFE62C4D48007D276C0A6934CB4B1C2ED9491BFC3433341D3820A41CD0C6FDD450D456D7D7136DC0121CFEA52F121AC4354E58367DB9E2AF48EE0349A47DB5737B67BB3480311EC71173666687635665835C80F56366B53D1997EF6C7F48A6D871DCA41899C77EE2E42F0734BD1E62B7A3D4896E4FF740CCCE6622262C23804C6E6A3423E53869924E4058A1768598ABFDDF47C6AEF98744451978B58199B76AF349FF8E052FBC3DDF4D565AFC2F63DFAE293F8CD12235E5763F3B528BBDBDEB092BB440E7F85676CA69CB53A981F18E777F933A42BE2CAF7120E420E28CBE36B92AEAA81268E117FBB853D558F58C175C52A6764452797EAD5EB15288B8038F3E98A556EB6107917FE505917B5996FFC931B713CF8E69EFD8B630F7EBD362E56930619E68191263883402408BB27A97004CDAC0093C2D6333A9044B56A2E5A0B67E110801A9B7D3ED9BD95F0BE8ECCC1BB3C01CB217B353D3EB1C8B54EA6A5CF65180E588F8D5228132EF"
            }, 
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
