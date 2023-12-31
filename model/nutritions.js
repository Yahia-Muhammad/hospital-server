const mongoose = require("mongoose");
const models = require("../middleware/models");

const nutritionSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Nutrition", nutritionSchema);
