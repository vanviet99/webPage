const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

const staffSchema = mongoose.Schema(
  {
    Image: {
      type: String,
      required: true,
    },
    FullName: {
      type: String,
      required: true,
    },
    Role: {
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
  { collection: " staff" }
);

const staffModal = mongoose.model(" staff", staffSchema);

module.exports = staffModal;
