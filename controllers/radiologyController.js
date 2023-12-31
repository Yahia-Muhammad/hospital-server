const Radiology = require("../model/Radiologys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Radiology));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Radiology));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Radiology));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Radiology));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Radiology));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};