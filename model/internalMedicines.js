const mongoose = require("mongoose");
const models = require("../utils/models");

const internalMedicineSchema = new mongoose.Schema(models());

module.exports = mongoose.model("InternalMedicine", internalMedicineSchema);
