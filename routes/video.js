const express = require('express');
const router = express.Router();
const videoData = require('../data/videos.json');
const { v4: uuid } = require("uuid");
const fs = require("fs");

// POST VIDEO
function postVideo(data) {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync('./data/videos.json', stringifiedData);
}

// READ VIDEO
function readVideos() {
  const treesFile = fs.readFileSync("./data/videos.json");
  const treesData = JSON.parse(treesFile);
  return treesData;
}

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

//POST
router.post('/', (req, res) => {
  const videoData = readVideos();
    const newVideo = {
      id: uuid(),
      title: req.body.title,
      description: req.body.description,
      channel: req.body.channel,
      image: req.body.image,
      comments: req.body.comments
    }
    videoData.push(newVideo);
    res.status(201).json(videoData);
    postVideo(videoData);

  })

module.exports = router