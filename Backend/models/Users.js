const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'must provide username'],
      trim: true,
      minlength: [3, 'username should be more than 3 characters'],
      maxlength: [20, 'username should be less than 20 characters'],
      unique: [true, 'username already in use, use unique username'],
    },
    email: {
      type: String,
      required: [true, 'must provide email'],
      trim: true,
      minlength: [3, 'email should be more than 3 characters'],
      maxlength: [50, 'email should be less than 50 characters'],
      unique: [true, 'email already in use, use unique email'],
    },
    password: {
      type: String,
      required: [true, 'must provide password'],
      minlength: [6, 'password should be more than 6 characters'],
      // maxlength: [20, 'password should be less than 20 characters'],
      unique: [true, 'password already in use, use unique password'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: [true, 'must provide name'],
      minlength: [3, 'username should be more than 3 characters'],
      maxlength: [40, 'username should be less than 40 characters'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('users', UserSchema);
