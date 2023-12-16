const homecontentModal = require("../Modal/homecontentModal");

const homecontentController = {
  addhomecontent: async (req, res) => {
    const { BannerTitle, BannerImageShow , BannerDescription , LanguageOption } = req.body;
    try {
      const newhomecontent = await homecontentModal.create({
        BannerTitle,
        BannerImageShow,
        BannerDescription,
        LanguageOption
      });

      res
        .status(200)
        .json({ message: "Thêm thành công", data: newhomecontent });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  puthomecontent: async (req, res) => {
    const { BannerTitle, BannerImageShow , BannerDescription , LanguageOption } = req.body;
    try {
      const updating = await homecontentModal.updateOne({
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
      let data = await homecontentModal.findOne({LanguageOption: req.params.LanguageOption})
      res
      .status(200)
      .json({ message: "Tthành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = homecontentController;
