const Pediatrics = require("../model/Pediatricss");
const asyncWrapper = require("../middleware/asyncWrapper");
const controllers = require("../middleware/controllers");

const getDoctors = asyncWrapper(controllers.funGetDoctors(Pediatrics));

const getDoctor = asyncWrapper(controllers.funGetDoctor(Pediatrics));

const addDoctor = asyncWrapper(controllers.funAddDoctor(Pediatrics));

const editDoctor = asyncWrapper(controllers.funEditDoctor(Pediatrics));

const deleteDoctor = asyncWrapper(controllers.funDeleteDoctor(Pediatrics));

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};