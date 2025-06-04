// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
  },
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  bio: {
    type: String, 
    default: '',
  },
  propic: {
    type: String, 
    default: '',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true, 
});

export default mongoose.model('User', userSchema);
