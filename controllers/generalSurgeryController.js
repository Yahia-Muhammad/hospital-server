const GeneralSurgery = require("../model/generalSurgerys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(GeneralSurgery));

const getDoctor = asyncWrapper(controllers.funGetDoctor(GeneralSurgery));

const addDoctor = asyncWrapper(controllers.funAddDoctor(GeneralSurgery));

const editDoctor = asyncWrapper(controllers.funEditDoctor(GeneralSurgery));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(GeneralSurgery));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
