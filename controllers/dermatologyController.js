const Dermatology = require("../model/dermatologys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Dermatology));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Dermatology));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Dermatology));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Dermatology));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Dermatology));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
