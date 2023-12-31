const mongoose = require("mongoose");
const models = require("../middleware/models");

const eyeSchema = new mongoose.Schema(models());

module.exports = mongoose.model("Eye", eyeSchema);
