const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const blog =require('../Controller/blogController')
const { upload } = require('../upload.config');

router.post('/addblog',  middlewreController.verifyTokenAndAdmin,  blog.addblog);
router.patch('/patchblog', middlewreController.verifyTokenAndAdmin,  blog.patchblog);
router.delete('/delblog/:BlogId', middlewreController.verifyTokenAndAdmin, blog.delblog);
router.post('/getblog/:LanguageOption', blog.getblog);
router.get('/getblogbyId/:BlogId', blog.getblogbyId);
router.post('/getblogbykeyindex/:BlogId', blog.getblogbykeyindex);
router.patch('/patchblogStatus', middlewreController.verifyTokenAndAdmin, blog.patchblogStatus);

module.exports = router;
