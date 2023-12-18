const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const bannerimglist =require('../Controller/bannerimglistModal')

router.post('/addbannerImage', middlewreController.verifyAdmin,  bannerimglist.addbannerImage);
router.patch('/putbannerImage',middlewreController.verifyAdmin, bannerimglist.putbannerImage);
router.delete('/delbannerImage/:bannerImageId',middlewreController.verifyAdmin, bannerimglist.delbannerImage);
router.post('/getAllbannerImage', bannerimglist.getAllbannerImage);

module.exports = router;
