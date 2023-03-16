const express = require('express');
const videoRoutes = require('./routes/video.js');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/', videoRoutes);

app.get(`/`, (req, res) => res.send('Hello from homepage'));

app.listen(port, () => console.log(`Sever running on port ${port}`));
