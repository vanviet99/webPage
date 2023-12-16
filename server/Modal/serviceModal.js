const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

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
    LanguageOption: {
        type: String,
        required: true,
      },
  },
  { collection: " service" }
);

const serviceModal = mongoose.model(" service", serviceSchema);

module.exports = serviceModal;
