const mongoose = require("mongoose");
const models = require("../utils/models");

const dermatologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("Dermatology", dermatologySchema);
