const Dental = require("../model/dentals");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Dental));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Dental));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Dental));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Dental));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Dental));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};