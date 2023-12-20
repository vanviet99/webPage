const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Camera')


const topicSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  KeyIndex: {
    type: String,
    required: true,
  },
  LanguageOption: {
    type: String,
    required: true,
  },
}, { collection: ' topic' });

const topicModel = mongoose.model(' topic', topicSchema);

module.exports = topicModel;
