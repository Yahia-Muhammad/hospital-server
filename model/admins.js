const mongoose = require("mongoose");
const titleRoles = require("../utils/titleRoles");

const adminSchema = new mongoose.Schema({
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
    required: false,
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
    type: String, // ["ADMIN", "DOCTOR"]
    enum: [titleRoles.ADMIN, titleRoles.DOCTOR],
  },

  avatar: {
    type: String,
    default: "default-profile.jpg"
  }
});

module.exports = mongoose.model("Admin", adminSchema);
