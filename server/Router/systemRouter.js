const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const system =require('../Controller/systemController')

router.post('/addsystem',middlewreController.verifyTokenAndAdmin, system.addSystem);
router.put('/putsystemm',middlewreController.verifyTokenAndAdmin,system.putSystem)
router.get('/getSystem',system.getSystem)

module.exports = router;
