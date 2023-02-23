const express = require('express');
const router = express.Router();
const Topic = require('../models/info.model')

router.get('/info', async (req,res) => {

    try{
        res.json(await Topic.find())
    }
    catch(err) {
        res.status(500).json({message: err})
    }
           
   

})


module.exports = router;