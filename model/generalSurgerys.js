const mongoose = require("mongoose");
const models = require("../utils/models");

const generalSurgerySchema = new mongoose.Schema(models());

module.exports = mongoose.model("GeneralSurgery", generalSurgerySchema);
