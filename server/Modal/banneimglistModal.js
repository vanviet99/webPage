const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

const bannerImageSchema = mongoose.Schema(
  {
    Image: {
      type: String,
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
