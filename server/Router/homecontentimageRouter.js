const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const homecontentimage =require('../Controller/homecontentimageController')

router.post('/addhomecontentImage',  homecontentimage.addhomecontentImage);
router.patch('/puthomecontentImage',   homecontentimage.puthomecontentImage)
router.get('/gethomecontentImage',homecontentimage.gethomecontentImage)
router.delete('/delhomecontentImage/:BannerID',   homecontentimage.delhomecontentImage)
router.get('/gethomecontentImagetbuyid/:BannerID',homecontentimage.gethomecontentImagetbuyid)



module.exports = router;
