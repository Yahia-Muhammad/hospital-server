const mongoose = require("mongoose");
const models = require("../utils/models");

const breastClinicSchema = new mongoose.Schema(models());

module.exports = mongoose.model("BreastClinic", breastClinicSchema);
