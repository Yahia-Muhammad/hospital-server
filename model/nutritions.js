const mongoose = require("mongoose");

const nutritionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  specialization: {
    type: String,
    required: true,
  },

  msg: {
    type: String,
    required: false,
  },

  avatar: {
    type: String,
    default: "uploads/default-profile.jpg"
  }
});

module.exports = mongoose.model("Nutrition", nutritionSchema);
