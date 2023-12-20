const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Camera");

const blogSchema = mongoose.Schema(
  {
    Image: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    TopicId: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    BlogItems: {
      type: String,
      required: true,
    },
    StatusBub: {
      type: Number,
      required: true,
    },
    KeyIndex: {
      type: String,
      required: true,
    },
    LanguageOption: {
      type: String,
      required: true,
    },
  },
  { collection: " blog" }
);

const blogModal = mongoose.model(" blog", blogSchema);

module.exports = blogModal;
