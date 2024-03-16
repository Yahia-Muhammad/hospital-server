const Ambulance = require("../model/ambulances");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Ambulance));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Ambulance));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Ambulance));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Ambulance));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Ambulance));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
