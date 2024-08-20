var express = require('express');
var router = express.Router();

const {postUser,checkUser, getUserProfile} = require('../Callbacks.js/users.Callback')

router.post('/',postUser);
router.post('/login',checkUser);
router.post('/getUser',getUserProfile)

module.exports = router;
