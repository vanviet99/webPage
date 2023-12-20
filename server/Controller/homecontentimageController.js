const homecontentImageModal = require("../Modal/homecontentImageModal");

const homecontentImageController = {
  addhomecontentImage: async (req, res) => {
    const { Bannerimage  } = req.body;
    try {
      const newhomecontent = await homecontentImageModal.create({
        Bannerimage
      });

      res
        .status(200)
        .json({ message: "Thêm thành công", data: newhomecontent });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  puthomecontentImage: async (req, res) => {
    const {Bannerimage , BannerID } = req.body;
    try {
      const updating = await homecontentImageModal.updateOne( {_id: BannerID}, {
        Bannerimage
      });

      if (updating) {
        const homecontent = await homecontentImageModal.findOne({});
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
  gethomecontentImage: async(req, res) =>{
    try {
      let data = await homecontentImageModal.find()
      res
      .status(200)
      .json({ message: "Tthành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delhomecontentImage: async(req, res) =>{
    try {
      let data = await homecontentImageModal.deleteOne({_id: req.params.BannerID})
      res
      .status(200)
      .json({ message: " Xóa Thành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  gethomecontentImagetbuyid: async(req, res) =>{
    try {
      let data = await homecontentImageModal.findOne({_id: req.params.BannerID})
      res
      .status(200)
      .json({ message: "Thành công", data: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = homecontentImageController;
