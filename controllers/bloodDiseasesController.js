const BloodDiseases = require("../model/bloodDiseases");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(BloodDiseases));

const getDoctor = asyncWrapper(controllers.funGetDoctor(BloodDiseases));

const addDoctor = asyncWrapper(controllers.funAddDoctor(BloodDiseases));

const editDoctor = asyncWrapper(controllers.funEditDoctor(BloodDiseases));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(BloodDiseases));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
