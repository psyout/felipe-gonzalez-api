const express = require('express');
const router = express.Router();
const { v4: uuid } = require("uuid");
const fs = require("fs");

// POST VIDEO
function postVideo(data) {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync('./data/videos.json', stringifiedData);
}

// READ VIDEO
function readVideos() {
  const videosFile = fs.readFileSync("./data/videos.json");
  const videosData = JSON.parse(videosFile);
  return videosData;
}

router.get('/', (req, res) => {
    const videosData = readVideos();
    const videoList = videosData.map(video => {
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
  const videosData = readVideos();
    const id = req.params.id;
    const video = videosData.find((video) => video.id === id);
    if (video){
        res.status(201).json(video);
    } else {
        res.status(404).send('Video not found')
    }
});

//POST
router.post('/', (req, res) => {
  const videosData = readVideos();
    const newVideo = {
      id: uuid(),
      title: req.body.title,
      description: req.body.description,
      channel: req.body.channel,
      image: req.body.image,
      comments: req.body.comments
    }
    videosData.push(newVideo);
    res.status(201).json(videosData);
    postVideo(videosData);

  })

module.exports = router