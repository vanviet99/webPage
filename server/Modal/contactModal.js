const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

const contactSchema = mongoose.Schema(
  {
    ImageIcon: {
        type: String,
      },
      Title: {
        type: String,
        required: true,
      },
      contactInfo:{
        type: String,
      },
      Address: {
        type: String,
      },
      TimeAddress: {
        type: String,
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
  { collection: " contact" }
);

const contactModal = mongoose.model(" contact", contactSchema);

module.exports = contactModal;
