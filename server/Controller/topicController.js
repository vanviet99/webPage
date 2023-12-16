const topicModal = require("../Modal/topicModal");

const topicController = {
  addtopic: async (req, res) => {
    
    const { Name, LanguageOption } = req.body;
    try {
      const newTopic = await topicModal.create({
        Name,
        LanguageOption,
      });
      res.status(200).json({ message: "Thêm thành công", data: newTopic });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deletetopic: async (req, res) => {
    try {
      const deleTopic = await topicModal.deleteOne({ _id: req.params.topicId });
      res.status(200).json({ message: "Xóa thành công", data: deleTopic });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  patchtopic: async (req, res) => {
    const { topicId, Name, LanguageOption } = req.body;
    try {
      const updateTopic = await topicModal.updateOne(
        { _id: topicId },
        {
          Name,
          LanguageOption,
        }
      );
      res
        .status(200)
        .json({ message: "Cập nhật thành công", data: updateTopic });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAlltopic: async (req, res) => {
    try {
      const getTopic = await topicModal.find({
        LanguageOption: req.params.LanguageOption,
      });
      res
        .status(200)
        .json({ message: "Thành công", data: getTopic });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  gettopicbuyId: async (req, res) => {
    try {
      const getTopic = await topicModal.findOne({
        _id: req.params.topicId,
      });
      res
        .status(200)
        .json({ message: "Thành công", data: getTopic });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = topicController;
