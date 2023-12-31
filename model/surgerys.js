const mongoose = require("mongoose");
const models = require("../middleware/models");

const surgerySchema = new mongoose.Schema(models());

module.exports = mongoose.model("Surgery", surgerySchema);
