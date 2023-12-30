const InternalMedicine = require("../model/InternalMedicines");
const httpStatusText = require("../utils/httpStatusText");
const { validationResult } = require("express-validator");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");

const getDoctors = asyncWrapper(async (req, res) => {
  const doctors = await InternalMedicine.find({}, { __v: false });
  res.status(200).json({ status: httpStatusText.SUCCESS, data: { doctors } });
});

const getDoctor = asyncWrapper(async (req, res, next) => {
  const doctor = await InternalMedicine.findById(req.params.id);
  if (!doctor) {
    const error = appError.create(httpStatusText.FAIL, 404, "course not found");
    return next(error);
  } else {
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { doctor } });
  }
});

const addDoctor = asyncWrapper(async (req, res, next) => {
  const { name, email, phone, specialization, msg } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = appError.create(httpStatusText.FAIL, 400, errors.array());
    return next(error);
  }

  const newDoctor = new InternalMedicine({
    name,
    email,
    phone,
    specialization,
    msg,
    avatar: req.file.filename
  })

  await newDoctor.save();
  res.status(200).json({ status: httpStatusText.SUCCESS, data: { newDoctor } });
});

const editDoctor = asyncWrapper(async (req, res) => {
  const doctor = await InternalMedicine.updateOne(
    { _id: req.params.id },
    { $set: { ...req.body } }
  );
  res.json({ status: httpStatusText.SUCCESS, data: { doctor } });
});

const deleteDoctor = asyncWrapper(async (req, res) => {
  await InternalMedicine.deleteOne({ _id: req.params.id });
  res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};

