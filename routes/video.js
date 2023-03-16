const express = require('express');
const router = express.Router();
const videoData = require('../data/videos.json');
const uuid = require("uuid");

router.get('/', (req, res) => {
    const videoList = videoData.map(video => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image
      };
    });
    console.log('Getting response from API');
    res.send(videoList);
  });

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const video = videoData.find((video) => video.id === id);
    if (video){
        res.json(video);
    } else {
        res.status(404).send('Video not found')
    }
});

router.post('/', (req, res) => {
    const newVideo = {
      id: uuid(),
      title: req.body.title,
      channel: req.body.channel,
      image: req.body.image
    }
    videoData.push(newVideo);
    res.status(201).json(videoData)
  })

module.exports = router