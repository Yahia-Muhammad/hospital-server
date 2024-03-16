const IntensiveCare = require("../model/intensiveCares");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(IntensiveCare));

const getDoctor = asyncWrapper(controllers.funGetDoctor(IntensiveCare));

const addDoctor = asyncWrapper(controllers.funAddDoctor(IntensiveCare));

const editDoctor = asyncWrapper(controllers.funEditDoctor(IntensiveCare));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(IntensiveCare));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
