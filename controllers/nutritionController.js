const Nutrition = require("../model/nutritions");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Nutrition));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Nutrition));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Nutrition));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Nutrition));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Nutrition));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
