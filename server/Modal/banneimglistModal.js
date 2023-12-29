const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

const bannerImageSchema = mongoose.Schema(
  {
    ImageList: {
      type: [],
      required: true,
    },
    createAt:{
        type:Date,
        default: new Date()
    },
    updateAt:{
        type:Date,
    }
  },
  { collection: " bannerImage" }
);

const bannerImageModal = mongoose.model(" bannerImage", bannerImageSchema);

module.exports = bannerImageModal;
