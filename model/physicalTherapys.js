const mongoose = require("mongoose");
const models = require("../middleware/models");

const physicalTherapySchema = new mongoose.Schema(models());

module.exports = mongoose.model("PhysicalTherapy", physicalTherapySchema);
