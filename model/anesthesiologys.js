const mongoose = require("mongoose");
const models = require("../middleware/models");

const anesthesiologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("Anesthesiologie", anesthesiologySchema);

