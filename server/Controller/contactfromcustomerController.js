const contactfromcustomerModal = require("../Modal/contactfromcustomerModal");
const ObjectId = require("mongoose").Types.ObjectId;
// contactfromcustomer
const contactfromcustomerController = {
  addcontactfromcustomer: async (req, res) => {
    const { ContactName, ContactPhone, ContactMail, Description, Status } =
      req.body;
    try {
      const newContact = await contactfromcustomerModal.create({
        ContactName,
        ContactPhone,
        ContactMail,
        Description,
        Status,
      });
      res.status(200).json({ message: "Thêm thành công", data: newContact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putcontactfromcustomer: async (req, res) => {
    const { Status, contactId } = req.body;
    try {
      const newContacts = await contactfromcustomerModal.updateOne(
        { _id: contactId },
        {
          Status,
          updateAt: new Date(),
        }
      );
      res
        .status(200)
        .json({ message: "Cập nhật thành công", data: newContacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delcontactfromcustomer: async (req, res) => {
    try {
      const Contact = await contactfromcustomerModal.deleteOne({
        _id: req.params.contactId,
      });
      res.status(200).json({ message: " Xóa thành công", data: Contact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getcontactfromcustomer: async (req, res) => {
    try {
      const { ContactName, ContactPhone, ContactMail, Status, page, size } =
        req.body;
      let pages = page ? page : 1;
      let sizes = size ? size : 10;

      let params = {
        ...(ContactName ? ContactName : null),
        ...(ContactPhone ? ContactPhone : null),
        ...(ContactMail ? ContactMail : null),
        ...(Status ? Status : null),
      };
      const contacts = await contactfromcustomerModal
        .find(params)
        .skip((pages - 1) * sizes)
        .limit(sizes);
      res.status(200).json({ message: "Thành công", data: contacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getcontactfromcustomerbuyId: async (req, res) => {
    try {
      const Contact = await contactfromcustomerModal.findOne({
        _id: new ObjectId(req.params.contactId),
      });
      res.status(200).json({ message: "Thành công", data: Contact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = contactfromcustomerController;
