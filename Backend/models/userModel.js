const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
    
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('users', UserSchema);