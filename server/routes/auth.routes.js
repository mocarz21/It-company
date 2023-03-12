const express = require('express');
const router = express.Router();
const authMiddelware =require('../utils/authMideelware')

const auth = require('../controller/auth.controller')

router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/user',authMiddelware, auth.getUser)
router.get('/logout',authMiddelware, auth.logout)

module.exports = router