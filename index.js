const express = require('express');
const axios = require('axios');

const app = express();
const api_key = 'f9533bff-7349-4e6e-85ee-34094bc38c36';
const videosUrl = `https://project-2-api.herokuapp.com/videos/?api_key=${api_key}`;
const videoData = require('./data/video-details.json');

app.use(express.json());


// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000')
})



