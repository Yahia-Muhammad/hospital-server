const Surgery = require("../model/Surgerys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Surgery));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Surgery));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Surgery));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Surgery));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Surgery));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};