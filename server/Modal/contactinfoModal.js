const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);
const contactinfoSchema = mongoose.Schema(
  {
    Zalo: {
      type: String,
    },
    Telegram: {
      type: String,
    },
    Whatschat: {
      type: String,
    },
    Address: {
      type: String,
    },
    Email: {
      type: String,
    },
  },
  { collection: " contactinfo" }
);

const contactinfoModal = mongoose.model(" contactinfo", contactinfoSchema);

module.exports = contactinfoModal;
