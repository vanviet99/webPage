const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const topic =require('../Controller/topicController')

router.post('/addtopic',middlewreController.verifyTokenAndAdmin, topic.addtopic);
router.delete('/deletetopic/:topicId',middlewreController.verifyTokenAndAdmin, topic.deletetopic);
router.patch('/patchtopic',middlewreController.verifyTokenAndAdmin, topic.patchtopic);
router.get('/getAlltopic/:LanguageOption', topic.getAlltopic);
router.get('/gettopicbuyId/:topicId', topic.gettopicbuyId);

module.exports = router;
