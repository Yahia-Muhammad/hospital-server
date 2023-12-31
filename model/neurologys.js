const mongoose = require("mongoose");
const models = require("../middleware/models");

const neurologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("Neurology", neurologySchema);
