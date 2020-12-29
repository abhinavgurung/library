const mongoose = require('mongoose');
const { Schema } = mongoose;
const roles = require('../utils/roles');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [roles.admin, roles.client],
      default: roles.client,
    },
  },
  { timestamps: true }, // gives createdAt and updatedAt
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
