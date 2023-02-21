const express = require('express');
const router = express.Router();
//const db = require('../db');


router.route('/admin').get((req,res)=>{
    res.send('menu admin')
})

router.route('/admin/pageOne').get((req,res)=>{
    res.send("<h1>Zaloguj się<h1/>")
})

module.exports = router;