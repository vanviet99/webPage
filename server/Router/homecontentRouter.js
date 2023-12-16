const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const homecontent =require('../Controller/homecontentController')

router.post('/addhomecontent',middlewreController.verifyTokenAndAdmin, homecontent.addhomecontent);
router.patch('/puthomecontent', middlewreController.verifyTokenAndAdmin, homecontent.puthomecontent)
router.get('/gethomecontent/:LanguageOption',homecontent.gethomecontent)

module.exports = router;
