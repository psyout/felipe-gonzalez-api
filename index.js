const express = require('express');
const videoRoutes = require('./routes/video.js');
const cors = require('cors');
require ('dotenv').config();

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/videos', videoRoutes);

app.get(`/`, (req, res) => res.send('Hello from homepage'));

app.listen(process.env.PORT || 3001, () => console.log(`Sever running on port ${PORT}`));
