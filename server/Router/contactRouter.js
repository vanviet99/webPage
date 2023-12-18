const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const contact =require('../Controller/contactController')

router.post('/addcontact', middlewreController.verifyAdmin,  contact.addcontact);
router.patch('/putcontact',middlewreController.verifyAdmin, contact.putcontact);
router.delete('/delcontact/:contactId',middlewreController.verifyAdmin, contact.delcontact);
router.post('/getAllcontact/:LanguageOption', contact.getAllcontact);
router.get('/getcontactbuyId/:contactId', contact.getcontactbuyId);

module.exports = router;
