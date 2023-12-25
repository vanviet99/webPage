const blogModal = require("../Modal/blogModal");
const HandleAddKeyindex = require("../../ulits/randomKey");
const topicModal = require("../Modal/topicModal");

const blogController = {
  addblog: async (req, res) => {
    let data = req.body;
    if (req.file) {
      const filePath = req.file.path;
      const fileUrl = `http://localhost:${
        process.env.PORT
      }/uploads/${path.basename(filePath)}`;
      data.Image = fileUrl;
    }
    try {
      const newService = await blogModal.insertMany(HandleAddKeyindex(data));
      res.status(200).json({ message: "Thêm thành công", data: newService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  patchblog: async (req, res) => {
    let {
      Image,
      Title,
      TopicId,
      StatusBub,
      Description,
      BlogItems,
      LanguageOption,
      BlogId,
    } = req.body;
    try {
      if (req.file) {
        const filePath = req.file.path;
        const fileUrl = `http://localhost:${
          process.env.PORT
        }/uploads/${path.basename(filePath)}`;
        Image = fileUrl;
      }
      const newService = await blogModal.updateOne(
        { _id: BlogId },
        {
          Image,
          Title,
          TopicId,
          Description,
          BlogItems,
          LanguageOption,
          StatusBub,
        }
      );
      res
        .status(200)
        .json({ message: "Cập nhật thành công", data: newService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delblog: async (req, res) => {
    try {
      const delblog = await blogModal.deleteMany({
        KeyIndex: req.params.BlogId,
      });
      res.status(200).json({ message: "Xóa thành công", data: delblog });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getblog: async (req, res) => {
    const { page, size, TopicId, StatusBub } = req.body;

    let pages = page ? page : 1;
    let sizes = size ? size : 10;

    try {
      let topiclist = await topicModal.find();
      let getblog = await blogModal
        .find({
          ...(TopicId && { TopicId }),
          ...(StatusBub && { StatusBub }),
          LanguageOption: req.params.LanguageOption,
        })
        .skip((pages - 1) * sizes)
        .limit(sizes);

      let data = getblog.map((value) => {
        let newvalue = {
          ...value.toObject(),
          TopicId: topiclist
            .filter((item) => item.KeyIndex == value.TopicId)
            ?.find(
              (value) => value.LanguageOption === req.params.LanguageOption
            ),
        };
        return newvalue;
      });

      const Count = await blogModal
        .find({
          ...(TopicId && { TopicId }),
          ...(StatusBub && { StatusBub }),
          LanguageOption: req.params.LanguageOption,
        })
        .count();
      res.status(200).json({ message: "Thành công", data: data, Count: Count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getblogbyId: async (req, res) => {
    try {
      const dataBlog = await blogModal.findOne({
        _id: req.params.BlogId,
      });
      res.status(200).json({ message: "Thành công", data: dataBlog });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getblogbykeyindex: async (req, res) => {
    const { LanguageOption } = req.body;
    let params = {
      KeyIndex: req.params.BlogId,
      ...(LanguageOption ? { LanguageOption: LanguageOption } : null),
    };
    try {
      const dataBlog = await blogModal.find(params);
      res.status(200).json({ message: "Thành công", data: dataBlog });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  patchblogStatus: async (req, res) => {
    const { StatusBub, BlogId } = req.body;
    try {
      const newService = await blogModal.updateMany(
        { KeyIndex: BlogId },
        {
          StatusBub,
        }
      );
      res
        .status(200)
        .json({ message: "Cập nhật thành công", data: newService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = blogController;
