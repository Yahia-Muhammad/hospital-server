const mongoose = require("mongoose");
const models = require("../utils/models");

const ambulanceSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Ambulance", ambulanceSchema);
