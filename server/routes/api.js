const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://s3.eu-central-1.amazonaws.com/dojomadness.com/code-challenge/heros';

const mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/', (req, res) => {
    res.send('api works');
});

// Get all Heroes list data using Mongo
router.get('/posts', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) {

            res.status(200).json(err);
        }
        var dbo = db.db("Heroes");
        dbo.collection("heroes").find({}).toArray(function(err, result) {
            if (err) {
                res.status(200).json(err);
                db.close();
            } else {
                console.log(result);
                res.status(200).json(result);
                db.close();
            }

        });
    });

    // To Fetch Data using Provided data URL 

    // axios.get(`${API}`)
    //     .then(posts => {
    //         res.status(200).json(posts.data.data);
    //     })
    //     .catch(error => {
    //         res.status(500).send(error)
    //     });
});

module.exports = router;