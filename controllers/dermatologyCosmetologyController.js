const DermatologyCosmetology = require("../model/DermatologyCosmetologys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(DermatologyCosmetology));

const getDoctor = asyncWrapper(controllers.funGetDoctor(DermatologyCosmetology));

const addDoctor = asyncWrapper(controllers.funAddDoctor(DermatologyCosmetology));

const editDoctor = asyncWrapper(controllers.funEditDoctor(DermatologyCosmetology));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(DermatologyCosmetology));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};