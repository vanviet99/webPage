const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const homecontentimage =require('../Controller/homecontentimageController')
const { upload } = require('../upload.config');

router.post('/addhomecontentImage',  upload.single('file'), homecontentimage.addhomecontentImage);
router.patch('/puthomecontentImage',  upload.single('file'),  homecontentimage.puthomecontentImage)
router.get('/gethomecontentImage',homecontentimage.gethomecontentImage)
router.delete('/delhomecontentImage/:BannerID',   homecontentimage.delhomecontentImage)
router.get('/gethomecontentImagetbuyid/:BannerID',homecontentimage.gethomecontentImagetbuyid)



module.exports = router;
