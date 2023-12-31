const PhysicalTherapy = require("../model/PhysicalTherapys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(PhysicalTherapy));

const getDoctor = asyncWrapper(controllers.funGetDoctor(PhysicalTherapy));

const addDoctor = asyncWrapper(controllers.funAddDoctor(PhysicalTherapy));

const editDoctor = asyncWrapper(controllers.funEditDoctor(PhysicalTherapy));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(PhysicalTherapy));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};