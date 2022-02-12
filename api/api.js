const axios = require('axios');
const apiKey = require('../key/dogapikey')
const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey
} //talvez troque de lugar

const api = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
    headers: headers
});

module.exports = api;
