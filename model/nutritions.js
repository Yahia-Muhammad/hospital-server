const mongoose = require("mongoose");
const models = require("../utils/models");

const nutritionSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Nutrition", nutritionSchema);
