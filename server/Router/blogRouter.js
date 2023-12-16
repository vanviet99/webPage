const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const blog =require('../Controller/blogController')

router.post('/addblog', middlewreController.verifyAdmin,  blog.addblog);
router.patch('/patchblog',middlewreController.verifyAdmin, blog.patchblog);
router.delete('/delblog/:BlogId',middlewreController.verifyAdmin, blog.delblog);
router.post('/getblog/:LanguageOption', blog.getblog);
router.get('/getblogbyId/:BlogId', blog.getblogbyId);

module.exports = router;
