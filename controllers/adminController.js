const Admin = require("../model/admins");
const httpStatusText = require("../utils/httpStatusText");
const { validationResult } = require("express-validator");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const generateJwt = require("../utils/generateJwt");



const getAdmins = asyncWrapper(async (req, res) => {
  const admins = await Admin.find({}, { __v: false, "password": false });
  res.status(200).json({ status: httpStatusText.SUCCESS, data: { admins } });
});

const getAdmin = asyncWrapper(async (req, res, next) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) {
    const error = appError.create(httpStatusText.FAIL, 404, "admin not found");
    return next(error);
  } else {
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { admin } });
  }
});

const addAdmin = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = appError.create(httpStatusText.FAIL, 400, errors.array());
    return next(error);
  }

  const newAdmin = new Admin(req.body);
  await newAdmin.save();
  res.status(200).json({ status: httpStatusText.SUCCESS, data: { newAdmin } });
});

const editAdmin = asyncWrapper(async (req, res) => {
  const admin = await Admin.updateOne(
    { _id: req.params.id },
    { $set: { ...req.body } }
  );
  res.json({ status: httpStatusText.SUCCESS, data: { admin } });
});

const deleteAdmin = asyncWrapper(async (req, res) => {
  await Admin.deleteOne({ _id: req.params.id });
  res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});

// Auth

const register = asyncWrapper(async (req, res, next) => {
  const { name, email, phone, specialization, title, password, role } = req.body;

  const oldAdmin = await Admin.findOne({ email: email });

  if (oldAdmin) {
    const error = appError.create(httpStatusText.FAIL, 400, "Admin already exists");
    return next(error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = new Admin({
    name,
    email,
    phone,
    specialization,
    title,
    password: hashedPassword,
    role,
  })

  if (req.file && req.file.filename) {
    newAdmin.avatar = req.file.filename;
  }

  // generate jwt token

  const token = await generateJwt({ email: newAdmin.email, id: newAdmin._id, role: newAdmin.role });

  newAdmin.token = token;

  await newAdmin.save();

  res.status(200).json({ status: httpStatusText.SUCCESS, data: { newAdmin } });

});

const login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    const error = appError.create(500, httpStatusText.ERROR, "check email and password");
    return next(error);
  }

  const getAdmin = await Admin.findOne({ email: email });

  if (!getAdmin) {
    const error = appError.create(httpStatusText.FAIL, 400, "invalid email");
    return next(error);
  }

  const matchedPassword = await bcrypt.compare(password, getAdmin.password);

  if (!matchedPassword) {
    const error = appError.create(httpStatusText.ERROR, 500, "invalid password");
    return next(error);
  }

  if (getAdmin && matchedPassword) {

    // logged in success
    const token = await generateJwt({ email: getAdmin.email, id: getAdmin._id, role: getAdmin.role });
    const id = getAdmin._id
    const role = getAdmin.role;
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { token, id, role } });

  } else {
    const error = appError.create(httpStatusText.ERROR, 500, "somthing wrong");
    return next(error);
  }
});


module.exports = {
  getAdmins,
  getAdmin,
  addAdmin,
  editAdmin,
  deleteAdmin,
  register,
  login
};

