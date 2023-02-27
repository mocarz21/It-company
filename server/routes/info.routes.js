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

router.get('/info/:search', async (req, res) => { // Do sprawdzenia pisane z głowy bez sprawdzania
    const searchTerm = req.params.search;

    try{
        res.json(await Topic.find({ descryptionTwo: { $regex: searchTerm, $options: 'i' } }).populate('Level.lv'))
    }
    catch(err){
        res.status(500).json({message: err})
    }
})

module.exports = router;

