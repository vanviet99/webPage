const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

const contactSchema = mongoose.Schema(
  {
    ImageIcon: {
        type: String,
        required: true,
      },
      Title: {
        type: String,
        required: true,
      },
      Address: {
        type: String,
        required: true,
      },
      TimeAddress: {
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
