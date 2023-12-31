const mongoose = require("mongoose");
const models = require("../middleware/models");

const radiologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("Radiology", radiologySchema);
