const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const customer =require('../Controller/customerController')
const { upload } = require('../upload.config');

router.post('/addCustomer', middlewreController.verifyTokenAndAdmin, upload.single('file'), customer.addCustomer);
router.patch('/patchCustomer', middlewreController.verifyTokenAndAdmin, upload.single('file'), customer.patchCustomer);
router.delete('/delCustomer/:customerId', middlewreController.verifyTokenAndAdmin, customer.delCustomer);
router.get('/getCustomer', customer.getCustomer);

module.exports = router;
