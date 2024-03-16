const Ophthalmology = require("../model/ophthalmologys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Ophthalmology));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Ophthalmology));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Ophthalmology));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Ophthalmology));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Ophthalmology));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
