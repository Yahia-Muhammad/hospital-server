const mongoose = require("mongoose");
const models = require("../middleware/models");

const orthopedicSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Orthopedic", orthopedicSchema);
