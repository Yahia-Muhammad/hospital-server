const ObstetricsGynecology = require("../model/ObstetricsGynecologys");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(ObstetricsGynecology));

const getDoctor = asyncWrapper(controllers.funGetDoctor(ObstetricsGynecology));

const addDoctor = asyncWrapper(controllers.funAddDoctor(ObstetricsGynecology));

const editDoctor = asyncWrapper(controllers.funEditDoctor(ObstetricsGynecology));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(ObstetricsGynecology));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};