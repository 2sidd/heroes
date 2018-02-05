const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://s3.eu-central-1.amazonaws.com/dojomadness.com/code-challenge/heros';

router.get('/', (req, res) => {
    res.send('api works');
});

// Get all Heroes list data 
router.get('/posts', (req, res) => {
    // Get posts from the mock api
    // replace with a service that connects to MongoDB
    axios.get(`${API}`)
        .then(posts => {
            res.status(200).json(posts.data.data);
        })
        .catch(error => {
            res.status(500).send(error)
        });
});

module.exports = router;