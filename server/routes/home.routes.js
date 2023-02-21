const express = require('express');
const router = express.Router();


router.route('/').get((req,res)=>{
    res.show('../src/index.js')
})

module.exports = router;