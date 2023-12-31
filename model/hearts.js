const mongoose = require("mongoose");
const models = require("../middleware/models");

const heartSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Heart", heartSchema);
