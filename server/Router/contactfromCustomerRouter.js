const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const contactfromcustomer =require('../Controller/contactfromcustomerController')

router.post('/addcontactfromcustomer',  contactfromcustomer.addcontactfromcustomer);
router.patch('/putcontactfromcustomer',  middlewreController.verifyTokenAndAdmin, contactfromcustomer.putcontactfromcustomer);
router.delete('/delcontactfromcustomer/:contactId',  middlewreController.verifyTokenAndAdmin, contactfromcustomer.delcontactfromcustomer);
router.post('/getcontactfromcustomer', contactfromcustomer.getcontactfromcustomer);
router.get('/getcontactfromcustomerbuyId/:contactId', contactfromcustomer.getcontactfromcustomerbuyId);

module.exports = router;
