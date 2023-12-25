const express = require('express');
const router = express.Router();
const service =require('../Controller/serviceController')
const middlewreController = require('../Controller/middlewreController')
const { upload } = require('../upload.config');


router.post('/addservice',middlewreController.verifyTokenAndAdmin,upload.single('file'), service.addservice);
router.patch('/patchservice',middlewreController.verifyTokenAndAdmin,upload.single('file'), service.patchservice);
router.delete('/delservice/:ServiceId',middlewreController.verifyTokenAndAdmin, service.delservice);
router.post('/getAllservice/:LanguageOption', service.getAllservice);
router.get('/getservicebyId/:ServiceId', service.getservicebyId);
router.get('/getservicebykeyindex/:ServiceId', service.getservicebykeyindex);

module.exports = router;
