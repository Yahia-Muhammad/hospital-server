const mongoose = require("mongoose");
const models = require("../utils/models");

const obGynSchema = new mongoose.Schema(models());

module.exports = mongoose.model("ObGyn", obGynSchema);
