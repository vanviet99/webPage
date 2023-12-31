const express = require('express');
const router = express.Router();
const middlewreController = require('../Controller/middlewreController')
const docpdf = require('../Controller/docpdfController')
const { upload } = require('../upload.config');

router.post('/adddocpdf', middlewreController.verifyTokenAndAdmin, upload.single('file'), docpdf.adddocpdf);
router.patch('/patchdocpdf/:fileId', middlewreController.verifyTokenAndAdmin, upload.single('file'), docpdf.patchdocpdf);
router.delete('/deletedocpdf/:fileId', middlewreController.verifyTokenAndAdmin, docpdf.deletedocpdf);
router.get('/getdocpdf', docpdf.getdocpdf);

module.exports = router;