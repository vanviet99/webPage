const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const contact =require('../Controller/contactController')

router.post('/addcontact',   middlewreController.verifyTokenAndAdmin, contact.addcontact);
router.patch('/putcontact',  middlewreController.verifyTokenAndAdmin, contact.putcontact);
router.delete('/delcontact/:contactId',  middlewreController.verifyTokenAndAdmin, contact.delcontact);
router.post('/getAllcontact/:LanguageOption', contact.getAllcontact);
router.get('/getcontactbuyId/:contactId', contact.getcontactbuyId);
router.get('/getcontactbuykeyindex/:contactId', contact.getcontactbuykeyindex);


module.exports = router;
