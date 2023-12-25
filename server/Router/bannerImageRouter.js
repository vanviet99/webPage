const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const bannerimglist =require('../Controller/bannerimglistModal')
const { upload } = require('../upload.config');

router.post('/addbannerImage',  middlewreController.verifyTokenAndAdmin,  upload.single('file'), bannerimglist.addbannerImage);
router.patch('/putbannerImage', middlewreController.verifyTokenAndAdmin, upload.single('file'), bannerimglist.putbannerImage);
router.post('/getAllbannerImage', bannerimglist.getAllbannerImage);
router.delete('/delAllbannerImage', middlewreController.verifyTokenAndAdmin, bannerimglist.delAllbannerImage);


module.exports = router;
