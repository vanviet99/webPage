const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const homecontent =require('../Controller/homecontentController')

router.post('/addhomecontent', homecontent.addhomecontent);
router.patch('/puthomecontent',  homecontent.puthomecontent)
router.get('/gethomecontent/:LanguageOption',homecontent.gethomecontent)
router.delete('/delhomecontent/:BannerID',  homecontent.delhomecontent)
router.get('/gethomecontentbuyid/:BannerID',homecontent.gethomecontentbuyid)



module.exports = router;
