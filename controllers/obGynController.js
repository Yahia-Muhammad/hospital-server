const ObGyn = require("../model/obGyns");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../utils/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(ObGyn));

const getDoctor = asyncWrapper(controllers.funGetDoctor(ObGyn));

const addDoctor = asyncWrapper(controllers.funAddDoctor(ObGyn));

const editDoctor = asyncWrapper(controllers.funEditDoctor(ObGyn));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(ObGyn));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
