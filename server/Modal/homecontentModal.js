const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

const homecontentSchema = mongoose.Schema(
  {
    BannerTitle: {
      type: String,
      required: true,
    },
    BannerDescription: {
      type: String,
      required: true,
    },
    LanguageOption: {
      type: String,
      required: true,
    },
  },
  { collection: " homecontent" }
);

const homecontentModel = mongoose.model(" homecontent", homecontentSchema);

module.exports = homecontentModel;
