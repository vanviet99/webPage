const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

const docpdfSchema = mongoose.Schema(
  {
    fileurl: {
      type: String,
    },
    name: {
      type: String,
    }
  },
  { collection: " docpdf" }
);

const docpdfModal = mongoose.model(" docpdf", docpdfSchema);

module.exports = docpdfModal;