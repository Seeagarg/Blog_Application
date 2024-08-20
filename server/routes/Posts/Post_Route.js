const express = require('express');
const { uploadImage, getPosts } = require('./Post_Callback');
const upload = require('../../Middleware/upload')

const router = express.Router();


router.post('/uploadimg',upload.single('file'),uploadImage);
router.get('/getPost',getPosts);

module.exports = router;
