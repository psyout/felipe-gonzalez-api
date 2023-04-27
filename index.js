const express = require('express');
const videoRoutes = require('./routes/video.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3006;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/videos', videoRoutes);

app.get(`/`, (req, res) => res.send('Hello from homepage'));

console.log(process.env.PORT);

//Express server
app.listen(process.env.PORT || 3006, () => {
    console.log(`Server listening on port ${PORT}`);
});
