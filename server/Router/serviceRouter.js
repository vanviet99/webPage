const express = require('express');
const router = express.Router();
const service =require('../Controller/serviceController')
const middlewreController = require('../Controller/middlewreController')


router.post('/addservice',middlewreController.verifyTokenAndAdmin, service.addservice);
router.patch('/patchservice',middlewreController.verifyTokenAndAdmin, service.patchservice);
router.delete('/delservice/:ServiceId',middlewreController.verifyTokenAndAdmin, service.delservice);
router.post('/getAllservice/:LanguageOption', service.getAllservice);
router.get('/getservicebyId/:ServiceId', service.getservicebyId);
router.get('/getservicebykeyindex/:ServiceId', service.getservicebykeyindex);

module.exports = router;
