const mongoose = require("mongoose");

mongoose.connect(process.env.DATA_BASE_URL + process.env.REPOSITORY);

const contactfromcustomerSchema = mongoose.Schema(
  {
    ContactName: {
      type: String,
      required: true,
    },
    ContactPhone: {
      type: String,
      required: true,
    },
    ContactMail: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
    },
    Status: {
      type: Number,
      required: true,
    },
    createAt :{
      type: Date,
      default: new Date()
    },
    updateAt:{
      type: Date,
    }
  },
  { collection: " contactfromcustomer" }
);

const contactfromcustomerModal = mongoose.model(
  " contactfromcustomer",
  contactfromcustomerSchema
);

module.exports = contactfromcustomerModal;
