const mongoose = require("mongoose");
const models = require("../middleware/models");

const obstetricsGynecologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("ObstetricsGynecology", obstetricsGynecologySchema);
