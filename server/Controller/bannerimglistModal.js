const banneimglistModal = require("../Modal/banneimglistModal");

const bannerImageController = {
  addbannerImage: async (req, res) => {
    const { ImageList} = req.body;
    console.log(ImageList, "ImageList");
    try {
      const newContact= await banneimglistModal.create({
        ImageList
      });
      res.status(200).json({ message: "Thêm thành công", data: newContact });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  putbannerImage: async (req, res) => {
    const { ImageList } = req.body;
    try {
      const newContacts = await banneimglistModal.updateOne(
      {ImageList}
      );
      res.status(200).json({ message: "Cập nhật thành công", data: newContacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delAllbannerImage: async (req, res) => {
    try {
        const result = await banneimglistModal.deleteMany({});
      res.status(200).json({ message: "Xóa thành công", data: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  getAllbannerImage: async (req, res) => {
    try {
      const contacts = await banneimglistModal.findOne();
      res.status(200).json({ message: "Thành công", data: contacts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = bannerImageController;

