const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

const serviceSchema = mongoose.Schema(
  {
    Image: {
      type: String,
      required: true,
    },
    ServiceName: {
      type: String,
      required: true,
    },
    TopicId: {
      type: String,
      required: true,
    },
    Description: {
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
  { collection: " service" }
);

const serviceModal = mongoose.model(" service", serviceSchema);

module.exports = serviceModal;
