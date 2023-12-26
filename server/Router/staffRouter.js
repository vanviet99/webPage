const express = require("express");
const router = express.Router();
const middlewreController = require("../Controller/middlewreController");
const staff = require("../Controller/staffController");
const { upload } = require('../upload.config');

router.post("/addstaff/", middlewreController.verifyTokenAndAdmin, staff.addstaff);
router.get("/getStaffbuykeyindex/:staffId", staff.getStaffbuykeyindex);

router.post("/getAllstaff/:LanguageOption", staff.getAllstaff);
router.post("/getStaffbuyId/:staffId", staff.getStaffbuyId);
router.patch(
  "/putstaff",
  middlewreController.verifyTokenAndAdmin,
  staff.putstaff
);
router.delete(
  "/delstaff/:staffId",
  middlewreController.verifyTokenAndAdmin,
  staff.delstaff
);

module.exports = router;
