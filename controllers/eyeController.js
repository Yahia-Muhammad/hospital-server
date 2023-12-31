const Eye = require("../model/eyes");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Eye));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Eye));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Eye));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Eye));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Eye));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
