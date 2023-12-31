const mongoose = require("mongoose");
const models = require("../middleware/models");

const dermatologyCosmetologySchema = new mongoose.Schema(models());

module.exports = mongoose.model("DermatologyCosmetology", dermatologyCosmetologySchema);
