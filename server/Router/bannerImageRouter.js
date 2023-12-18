const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const bannerimglist =require('../Controller/bannerimglistModal')

router.post('/addbannerImage',  middlewreController.verifyTokenAndAdmin,  bannerimglist.addbannerImage);
router.patch('/putbannerImage', middlewreController.verifyTokenAndAdmin, bannerimglist.putbannerImage);
router.post('/getAllbannerImage', bannerimglist.getAllbannerImage);
router.delete('/delAllbannerImage', middlewreController.verifyTokenAndAdmin, bannerimglist.delAllbannerImage);


module.exports = router;
