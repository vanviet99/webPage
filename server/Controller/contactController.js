const contactModal = require("../Modal/contactModal");
const ObjectId = require('mongoose').Types.ObjectId;

const contactController = {
  addcontact: async (req, res) => {
    const { ImageIcon, Title, Address, TimeAddress , LanguageOption } = req.body;
    try {
      const newContact= await contactModal.create({
        ImageIcon, Title, Address, TimeAddress , LanguageOption
      });
      res.status(200).json({ message: "Thêm thành công", data: newContact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putcontact: async (req, res) => {
    const { ImageIcon, Title, Address, TimeAddress , LanguageOption , contactId} = req.body;
    try {
      const newContacts = await contactModal.updateOne(
        { _id: contactId },
        {
            ImageIcon, Title, Address, TimeAddress , LanguageOption
        }
      );
      res.status(200).json({ message: "Cập nhật thành công", data: newContacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delcontact: async (req, res) => {
    try {
      const Contact = await contactModal.deleteOne(
        { _id: req.params.contactId },
      );
      res.status(200).json({ message: " Xóa thành công", data: Contact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllcontact: async (req, res) => {
    try {
      const contacts = await contactModal.find({LanguageOption: req.params.LanguageOption});
      res.status(200).json({ message: "Thành công", data: contacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getcontactbuyId: async (req, res) => {
    try {
      const Contact = await contactModal.findOne( { _id:  new ObjectId(req.params.contactId) },);
      res.status(200).json({ message: "Thành công", data: Contact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = contactController;
