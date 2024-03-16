const mongoose = require("mongoose");
const models = require("../utils/models");

const radiologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("Radiology", radiologySchema);
