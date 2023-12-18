const banneimglistModal = require("../Modal/banneimglistModal");

const bannerImageController = {
  addbannerImage: async (req, res) => {
    const { Image} = req.body;
    try {
      const newContact= await banneimglistModal.create({
        Image
      });
      res.status(200).json({ message: "Thêm thành công", data: newContact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putbannerImage: async (req, res) => {
    const { Image , bannerImageId} = req.body;
    try {
      const newContacts = await banneimglistModal.updateOne(
        { _id: bannerImageId },
        {
            Image
        }
      );
      res.status(200).json({ message: "Cập nhật thành công", data: newContacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delbannerImage: async (req, res) => {
    try {
      const Contact = await contactModal.deleteOne(
        { _id: req.params.bannerImageId},
      );
      res.status(200).json({ message: " Xóa thành công", data: Contact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllbannerImage: async (req, res) => {
    try {
      const contacts = await banneimglistModal.find();
      res.status(200).json({ message: "Thành công", data: contacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = bannerImageController;

