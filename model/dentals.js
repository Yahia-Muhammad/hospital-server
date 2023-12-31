const mongoose = require("mongoose");
const models = require("../middleware/models");

const dentalSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Dental", dentalSchema);
