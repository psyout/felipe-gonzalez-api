const express = require('express');
const router = express.Router();
const videoDetails = require('../data/video-details.json');


router.get('/', (req, res) => {
    console.log(videoDetails);
    res.send('Hello');
});


router.post('/', (req, res) =>{
   console.log('Recieved');
   const video = req.body;

   videoDetails.push(video);
   res.send('Reached');
})

module.exports = router