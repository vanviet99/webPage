const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

const homecontentimageSchema = mongoose.Schema(
  {
    Bannerimage : {
      type: String,
      required: true,
    },
    LanguageOption: {
      type: String,
      required: true,
    },
  },
  { collection: " homecontentimage" }
);

const homecontentimageModel = mongoose.model(" homecontentimage", homecontentimageSchema);

module.exports = homecontentimageModel;
