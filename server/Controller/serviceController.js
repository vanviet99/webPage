const serviceModal = require("../Modal/serviceModal");
const topicModal = require("../Modal/topicModal");
const HandleAddKeyindex   = require("../../ulits/randomKey");

const serviceController = {
  addservice: async (req, res) => {
    try {
      const newService = await serviceModal.insertMany(
        HandleAddKeyindex(req.body)
      );
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
      const delService = await serviceModal.deleteMany({
        KeyIndex: req.params.ServiceId,
      });
      res.status(200).json({ message: "Xóa thành công", data: delService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllservice: async (req, res) => {
    const { page, size, TopicId } = req.body;

    let pages = page ? page : 1;
    let sizes = size ? size : 10;

    try {
      let topiclist = await topicModal.find();
      let getService = await serviceModal
        .find(
          TopicId
            ? { TopicId: TopicId, LanguageOption: req.params.LanguageOption }
            : { LanguageOption: req.params.LanguageOption }
        )
        .skip((pages - 1) * sizes)
        .limit(sizes);
      let data = getService.map((value) => {
        let newvalue = {
          ...value.toObject(),
          TopicId: topiclist.filter((item) => item.KeyIndex == value.TopicId)?.find((value)=> value.LanguageOption === req.params.LanguageOption),
        };
        return newvalue;
      });


      const Count =  await serviceModal
      .find(
        TopicId
          ? { TopicId: TopicId, LanguageOption: req.params.LanguageOption }
          : { LanguageOption: req.params.LanguageOption }
      ).count()
      res.status(200).json({ message: "Thành công", data: data , Count:Count });
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

  getservicebykeyindex: async (req, res) => {
    try {
      const dataService = await serviceModal.find({
        KeyIndex: req.params.ServiceId,
      });
      res.status(200).json({ message: "Thành công", data: dataService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = serviceController;
