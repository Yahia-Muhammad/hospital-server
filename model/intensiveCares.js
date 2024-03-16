const mongoose = require("mongoose");
const models = require("../utils/models");

const intensiveCareSchema = new mongoose.Schema(models());

module.exports = mongoose.model("IntensiveCare", intensiveCareSchema);
