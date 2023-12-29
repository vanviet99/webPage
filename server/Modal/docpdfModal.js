const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

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