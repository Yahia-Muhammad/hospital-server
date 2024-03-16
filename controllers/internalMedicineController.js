const InternalMedicine = require("../model/internalMedicines");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(InternalMedicine));

const getDoctor = asyncWrapper(controllers.funGetDoctor(InternalMedicine));

const addDoctor = asyncWrapper(controllers.funAddDoctor(InternalMedicine));

const editDoctor = asyncWrapper(controllers.funEditDoctor(InternalMedicine));

const deleteDoctor = asyncWrapper(
  controllers.funDeleteDoctor(InternalMedicine)
);

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
