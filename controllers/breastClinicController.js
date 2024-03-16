const BreastClinic = require("../model/breastClinics");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(BreastClinic));

const getDoctor = asyncWrapper(controllers.funGetDoctor(BreastClinic));

const addDoctor = asyncWrapper(controllers.funAddDoctor(BreastClinic));

const editDoctor = asyncWrapper(controllers.funEditDoctor(BreastClinic));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(BreastClinic));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
