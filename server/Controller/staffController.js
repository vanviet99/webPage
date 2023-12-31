const staffModal = require("../Modal/staffModal");
const ObjectId = require("mongoose").Types.ObjectId;
const HandleAddKeyindex = require("../ulits/randomKey");
const path = require("path");

const staffController = {
  addstaff: async (req, res) => {

    let data = req.body
    
    try {
      const newStaff = await staffModal.insertMany(HandleAddKeyindex(data));
      res.status(200).json({ message: "Thêm thành công", data: newStaff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putstaff: async (req, res) => {
    const { Image, FullName, Role, Description, staffId, LanguageOption } =
      req.body;
    try {
      const newStaff = await staffModal.updateOne(
        { _id: staffId },
        {
          Image,
          FullName,
          Role,
          Description,
          LanguageOption,
        }
      );
      res.status(200).json({ message: "Cập nhật thành công", data: newStaff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delstaff: async (req, res) => {
    try {
      const Staff = await staffModal.deleteMany({
        KeyIndex: req.params.staffId,
      });
      res.status(200).json({ message: " Xóa thành công", data: Staff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllstaff: async (req, res) => {
    const { page, size } = req.body;

    try {
      const Staff = await staffModal
        .find({ LanguageOption: req.params.LanguageOption })
        .skip((page - 1) * size)
        .limit(size);
      const count = await staffModal
        .find({ LanguageOption: req.params.LanguageOption })
        .count();
      res
        .status(200)
        .json({ message: "Thành công", data: Staff, count: count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getStaffbuyId: async (req, res) => {
    try {
      const Staff = await staffModal.findOne({
        _id: new ObjectId(req.params.staffId),
      });
      res.status(200).json({ message: "Thành công", data: Staff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getStaffbuykeyindex: async (req, res) => {
    try {
      const Staff = await staffModal.find({ KeyIndex: req.params.staffId });
      res.status(200).json({ message: "Thành công", data: Staff });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = staffController;
