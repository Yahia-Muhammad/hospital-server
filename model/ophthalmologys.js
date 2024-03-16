const mongoose = require("mongoose");
const models = require("../utils/models");

const ophthalmologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("Ophthalmology", ophthalmologySchema);
