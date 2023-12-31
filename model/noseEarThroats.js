const mongoose = require("mongoose");
const models = require("../middleware/models");

const noseEarThroatSchema = new mongoose.Schema(models());

module.exports = mongoose.model("NoseEarThroat", noseEarThroatSchema);
