const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Camera')


const userSchema = mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: '1'
  },
  refreshToken:{
    type:String,
    default:null
  },
  code:{
    type:String,
    default:null
  }

}, { collection: 'user' });

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
