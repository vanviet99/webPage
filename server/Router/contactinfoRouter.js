const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const contactinfo =require('../Controller/contactinfoController')

router.post('/addcontactinfo',   middlewreController.verifyTokenAndAdmin, contactinfo.addcontactinfo);
router.patch('/putcontactinfo',  middlewreController.verifyTokenAndAdmin, contactinfo.putcontactinfo);
router.get('/getAllcontactinfo', contactinfo.getAllcontactinfo);


module.exports = router;
