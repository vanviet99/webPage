const contactinfoModal = require("../Modal/contactinfoModal");
const ObjectId = require("mongoose").Types.ObjectId;

const contactinfoController = {
  addcontactinfo: async (req, res) => {
    try {
      const newContact = await contactinfoModal.create(req.body);
      res.status(200).json({ message: "Thêm thành công", data: newContact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putcontactinfo: async (req, res) => {
    const {
        Zalo,
      Telegram,
      Whatschat,
      Address,
      Email,
    } = req.body;
    try {
      const newContacts = await contactinfoModal.updateOne(
        {
            Zalo,
          Telegram,
          Whatschat,
          Address,
          Email,
        }
      );
      res
        .status(200)
        .json({ message: "Cập nhật thành công", data: newContacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllcontactinfo: async (req, res) => {
    try {
      const contacts = await contactinfoModal.find();
      res.status(200).json({ message: "Thành công", data: contacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = contactinfoController;
