const blogModal = require("../Modal/blogModal");
const HandleAddKeyindex   = require("../../ulits/randomKey");
const blogController = {
  addblog: async (req, res) => {
    try {
      const newService = await blogModal.insertMany(HandleAddKeyindex(req.body));
      res.status(200).json({ message: "Thêm thành công", data: newService });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  patchblog: async (req, res) => {
    const { Image, Title, TopicId, Description, BlogItems, LanguageOption , BlogId } =
      req.body;
    try {
      const newService = await blogModal.updateOne(
        { _id: BlogId },
        {
            Image,
            Title,
            TopicId,
            Description,
            BlogItems,
            LanguageOption,
            StatusBub
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
    const { page, size, TopicId , StatusBub } = req.body;

    let pages = page ? page : 1;
    let sizes = size ? size : 10;

    try {
      const getblog = await blogModal
      .find({
        ...(TopicId && { TopicId }),
        ...(StatusBub && { StatusBub }),
        LanguageOption: req.params.LanguageOption,
      })
      .skip((pages - 1) * sizes)
      .limit(sizes);

      const Count =  await blogModal
      .find({
        ...(TopicId && { TopicId }),
        ...(StatusBub && { StatusBub }),
        LanguageOption: req.params.LanguageOption,
      }).count()
      res.status(200).json({ message: "Thành công", data: getblog, Count: Count });
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
};

module.exports = blogController;
