const NoseEarThroat = require("../model/NoseEarThroats");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(NoseEarThroat));

const getDoctor = asyncWrapper(controllers.funGetDoctor(NoseEarThroat));

const addDoctor = asyncWrapper(controllers.funAddDoctor(NoseEarThroat));

const editDoctor = asyncWrapper(controllers.funEditDoctor(NoseEarThroat));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(NoseEarThroat));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};