const mongoose = require("mongoose");
const models = require("../middleware/models");

const internalMedicineSchema = new mongoose.Schema(models());

module.exports = mongoose.model("InternalMedicine", internalMedicineSchema);
