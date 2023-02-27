const express = require('express');
const router = express.Router();
const Topic = require('../models/info.model')
const Level = require('../models/level.model');


router.get('/info', async (req,res) => {

    try{
        res.json(await Topic.find().populate('Level.lv')) 
    }
    catch(err) {
        res.status(500).json({message: err})
    }
});

module.exports = router;

