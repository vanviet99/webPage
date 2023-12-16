const serviceModal = require("../Modal/serviceModal");

const serviceController = {
  addservice: async (req, res) => {
    const { Image, ServiceName, TopicId, Description, LanguageOption } =
      req.body;
      console.log(req.body);
    try {
      const newService = await serviceModal.create({
        Image,
        ServiceName,
        TopicId,
        Description,
        LanguageOption,
      });
      res.status(200).json({ message: "Thêm thành công", data: newService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  patchservice: async (req, res) => {
    const {
      Image,
      ServiceName,
      TopicId,
      Description,
      LanguageOption,
      ServiceId,
    } = req.body;
    try {
      const newService = await serviceModal.updateOne(
        { _id: ServiceId },
        {
          Image,
          ServiceName,
          TopicId,
          Description,
          LanguageOption,
        }
      );
      res
        .status(200)
        .json({ message: "Cập nhật thành công", data: newService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delservice: async (req, res) => {
    try {
      const delService = await serviceModal.deleteOne({
        _id: req.params.ServiceId,
      });
      res.status(200).json({ message: "Xóa thành công", data: delService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllservice: async (req, res) => {
    const { page, size, TopicId } = req.body;

   let pages = page ? page : 1;
   let  sizes = size ? size :  10;

    try {
      const getService = await serviceModal
        .find(TopicId ? { TopicId: TopicId, LanguageOption: req.params.LanguageOption } : {LanguageOption: req.params.LanguageOption})
        .skip((pages - 1) * sizes)
        .limit(sizes);
      res.status(200).json({ message: "Thành công", data: getService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getservicebyId: async (req, res) => {
    try {
      const dataService = await serviceModal.findOne({
        _id: req.params.ServiceId,
      });
      res.status(200).json({ message: "Thành công", data: dataService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = serviceController;
