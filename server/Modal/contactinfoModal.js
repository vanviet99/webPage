const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");
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
