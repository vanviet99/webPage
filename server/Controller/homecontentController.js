const homecontentModal = require("../Modal/homecontentModal");
const HandleAddKeyindex   = require("../../ulits/randomKey");

const homecontentController = {
  addhomecontent: async (req, res) => {
    try {
      const newhomecontent = await homecontentModal.insertMany(
        HandleAddKeyindex(req.body)
      );

      res
        .status(200)
        .json({ message: "Thêm thành công", data: newhomecontent });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  puthomecontent: async (req, res) => {
    const { BannerTitle, BannerImageShow , BannerDescription , LanguageOption , BannerID } = req.body;
    try {
      const updating = await homecontentModal.updateOne( {_id: BannerID}, {
        BannerTitle,
        BannerImageShow,
        BannerDescription,
        LanguageOption
      });

      if (updating) {
        const homecontent = await homecontentModal.findOne({});
        res
          .status(200)
          .json({ message: "Cập nhật thành công", data: homecontent });
      } else {
        res.status(500).json({ message: "Cập nhật không thàn công" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  gethomecontent: async(req, res) =>{
    try {
      let data = await homecontentModal.find({LanguageOption: req.params.LanguageOption})
      res
      .status(200)
      .json({ message: "Tthành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delhomecontent: async(req, res) =>{
    try {
      let data = await homecontentModal.deleteMany({KeyIndex: req.params.BannerID})
      res
      .status(200)
      .json({ message: " Xóa Thành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  gethomecontentbuyid: async(req, res) =>{
    try {
      let data = await homecontentModal.findOne({_id: req.params.BannerID})
      res
      .status(200)
      .json({ message: "Thành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  gethomecontentbuykeyindex: async(req, res) =>{
    try {
      let data = await homecontentModal.find({KeyIndex: req.params.BannerID})
      res
      .status(200)
      .json({ message: "Thành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = homecontentController;
