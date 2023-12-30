const mongoose = require("mongoose");
const userRoles = require("../utils/userRoles");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  phone: {
    type: String,
    required: true,
  },

  specialization: {
    type: String,
    required: false,
  },

  title: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  token: {
    type: String,
  },

  role: {
    type: String, // ["USER", "ADMIN", "MANGER"]
    enum: [userRoles.USER, userRoles.ADMIN, userRoles.MANGER],
    default: userRoles.USER
  },

  avatar: {
    type: String,
    default: "uploads/default-profile.jpg"
  }
});

module.exports = mongoose.model("user", userSchema);
