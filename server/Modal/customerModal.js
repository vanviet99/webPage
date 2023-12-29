const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

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
