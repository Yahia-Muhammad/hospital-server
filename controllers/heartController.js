const Heart = require("../model/Hearts");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Heart));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Heart));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Heart));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Heart));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Heart));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};