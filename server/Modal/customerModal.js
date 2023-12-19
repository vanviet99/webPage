const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

const customerSchema = mongoose.Schema(
  {
    Image: {
      type: String,
      required: true,
    }
  },
  { collection: " customer" }
);

const customerModal = mongoose.model(" customer", customerSchema);

module.exports = customerModal;
