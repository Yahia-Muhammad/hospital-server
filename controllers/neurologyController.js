const Neurology = require("../model/Neurologys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Neurology));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Neurology));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Neurology));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Neurology));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Neurology));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};