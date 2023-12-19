const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const customer =require('../Controller/customerController')

router.post('/addCustomer', middlewreController.verifyTokenAndAdmin, customer.addCustomer);
router.patch('/patchCustomer', middlewreController.verifyTokenAndAdmin, customer.patchCustomer);
router.delete('/delCustomer/:customerId', middlewreController.verifyTokenAndAdmin, customer.delCustomer);
router.get('/getCustomer/:LanguageOption', customer.getCustomer);

module.exports = router;
