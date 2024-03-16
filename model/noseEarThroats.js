const mongoose = require("mongoose");
const models = require("../utils/models");

const noseEarThroatSchema = new mongoose.Schema(models());

module.exports = mongoose.model("NoseEarThroat", noseEarThroatSchema);
