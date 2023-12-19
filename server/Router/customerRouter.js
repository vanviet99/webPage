const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const customer =require('../Controller/customerController')

router.post('/addCustomer', customer.addCustomer);
router.patch('/patchCustomer', customer.patchCustomer);
router.delete('/delCustomer/:customerId', customer.delCustomer);
router.get('/getCustomer/:LanguageOption', customer.getCustomer);

module.exports = router;
