const Orthopedic = require("../model/orthopedics");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Orthopedic));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Orthopedic));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Orthopedic));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Orthopedic));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Orthopedic));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};