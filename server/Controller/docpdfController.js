const docpdfModal = require("../Modal/docpdfModal");
const path = require("path");

const customerController = {
  adddocpdf: async (req, res) => {
    let newData = {};
    try {
      if (req.file) {

        const filePath = req.file.path

        const name = req.file.originalname
        console.log("name", name)
        const fileUrl = `http://localhost:${process.env.PORT
          }/uploads/${path.basename(filePath)}`;
        newData.fileurl = fileUrl;
        newData.name = name
      }
      const addfile = await docpdfModal.create(newData);
      res.status(200).json({ message: "Thêm thành công", data: addfile });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  patchdocpdf: async (req, res) => {
    const { fileId } = req.params;
    let newData = {};
    try {
      if (req.file) {
        const filePath = req.file.path;
        const name = req.file.originalname;
        const fileUrl = `http://localhost:${process.env.PORT
          }/uploads/${path.basename(filePath)}`;
        newData.fileurl = fileUrl;
        newData.name = name
      }
      const updateFile = await docpdfModal.updateOne({ _id: fileId }, newData);
      res
        .status(200)
        .json({ message: "Cập nhật thành công", data: updateFile });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deletedocpdf: async (req, res) => {
    const { fileId } = req.params;
    try {
      const delefile = await docpdfModal.deleteOne({ _id: fileId });
      res.status(200).json({ message: "Xóa thành công", data: delefile });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getdocpdf: async (req, res) => {
    try {
      const docpdf = await docpdfModal.find();
      res.status(200).json({ message: "Thành công", data: docpdf });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = customerController;