const mongoose = require("mongoose");
const models = require("../utils/models");

const bloodDiseasesSchema = new mongoose.Schema(models());

module.exports = mongoose.model("BloodDiseases", bloodDiseasesSchema);
