const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

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
    KeyIndex: {
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
