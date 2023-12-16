const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Camera')


const systemSchema = mongoose.Schema({
  Address: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
}, { collection: ' system' });

const systemModel = mongoose.model(' system', systemSchema);

module.exports = systemModel;
