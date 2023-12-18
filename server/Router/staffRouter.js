const express = require("express");
const router = express.Router();
const middlewreController = require("../Controller/middlewreController");
const staff = require("../Controller/staffController");

router.post("/addstaff/", staff.addstaff);

router.get("/getAllstaff/:LanguageOption", staff.getAllstaff);
router.get("/getStaffbuyId/:staffId", staff.getStaffbuyId);
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
