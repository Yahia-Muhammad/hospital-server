const Anesthesiology = require("../model/anesthesiologys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Anesthesiology));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Anesthesiology));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Anesthesiology));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Anesthesiology));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Anesthesiology));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
