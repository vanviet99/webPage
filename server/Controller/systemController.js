const systemModel = require("../Modal/systemModal");

const systemController = {
  addSystem: async (req, res) => {
    const { Address, PhoneNumber, Email } = req.body;
    try {
      const newCategory = await systemModel.create({
        Address,
        PhoneNumber,
        Email,
      });

      res.status(200).json({ message: "Thêm thành công", data: newCategory });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putSystem: async (req, res) => {
    const { Address, PhoneNumber, Email } = req.body;
    try {
      const updating = await systemModel.updateOne({
        Address,
        PhoneNumber,
        Email,
      });

      if (updating) {
        const systemNew = await systemModel.findOne({});
        res.status(200).json({ message: "Cập nhật thành công", data: systemNew });
      }else{
        res.status(500).json({ message: "Cập nhật không thàn công" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getSystem: async (req, res) => {
    try {
      const updating = await systemModel.findOne();

      res.status(200).json({ message: "Thành công", data: updating });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

};

module.exports = systemController;
