const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

const homecontentimageSchema = mongoose.Schema(
  {
    Bannerimage : {
      type: String,
      required: true,
    },
  },
  { collection: " homecontentimage" }
);

const homecontentimageModel = mongoose.model(" homecontentimage", homecontentimageSchema);

module.exports = homecontentimageModel;
