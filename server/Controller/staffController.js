const staffModal = require("../Modal/staffModal");
const ObjectId = require('mongoose').Types.ObjectId;
const HandleAddKeyindex   = require("../../ulits/randomKey");

const staffController = {
  addstaff: async (req, res) => {
    try {
      const newStaff = await staffModal.insertMany(
        HandleAddKeyindex(req.body)
      );
      res.status(200).json({ message: "Thêm thành công", data: newStaff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putstaff: async (req, res) => {
    console.log(123123);
    const { Image, FullName, Role, Description, staffId, LanguageOption } = req.body;
    try {
      console.log(123123123);
      const newStaff = await staffModal.updateOne(
        { _id: staffId },
        {
          Image,
          FullName,
          Role,
          Description,
          LanguageOption
        }
      );
      res.status(200).json({ message: "Cập nhật thành công", data: newStaff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delstaff: async (req, res) => {
    try {
      const Staff = await staffModal.deleteMany(
        { KeyIndex: req.params.staffId },
      );
      res.status(200).json({ message: " Xóa thành công", data: Staff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllstaff: async (req, res) => {
    try {
      const Staff = await staffModal.find({LanguageOption: req.params.LanguageOption});
      res.status(200).json({ message: "Thành công", data: Staff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getStaffbuyId: async (req, res) => {
    try {
      const Staff = await staffModal.findOne( { _id:  new ObjectId(req.params.staffId) },);
      res.status(200).json({ message: "Thành công", data: Staff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = staffController;
