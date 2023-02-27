const express = require('express');
const router = express.Router();


router.route('/').get((req,res)=>{
    res.show('../build/index.html')
})




module.exports = router;
