const express = require('express');
const axios = require('axios');
const { v4: uuid } = require("uuid");

const videoData = require('./routes/video.js');
const app = express();
const PORT = 3000;

const api_key = 'f9533bff-7349-4e6e-85ee-34094bc38c36';
const videosUrl = `https://project-2-api.herokuapp.com/videos/?api_key=${api_key}`;


app.use(express.json());
app.use('/videos', videoData);

app.get(`/`, (req, res) => res.send('Hello from homepage'));

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));


