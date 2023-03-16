const express = require('express');
const axios = require('axios');
const { v4: uuid } = require("uuid");
const videoRoutes = require('./routes/video.js');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/', videoRoutes);

app.get(`/`, (req, res) => res.send('Hello from homepage'));

app.listen(port, () => console.log(`Sever running on port ${port}`));
