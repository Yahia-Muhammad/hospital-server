const mongoose = require("mongoose");
const models = require("../middleware/models");

const pediatricsSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Pediatrics", pediatricsSchema);
