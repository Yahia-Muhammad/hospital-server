const Nutrition = require("../model/Nutritions");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

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