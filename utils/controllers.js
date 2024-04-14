const httpStatusText = require("./httpStatusText");
const { validationResult } = require("express-validator");
const appError = require("./appError");

const funGetDoctors = (model) => {
  return async (req, res) => {
    const doctors = await model.find({}, { __v: false });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { doctors } });
  };
};

const funGetDoctor = (model) => {
  return async (req, res, next) => {
    const doctor = await model.findById(req.params.id);
    if (!doctor) {
      const error = appError.create(
        httpStatusText.FAIL,
        404,
        "course not found"
      );
      return next(error);
    } else {
      res
        .status(200)
        .json({ status: httpStatusText.SUCCESS, data: { doctor } });
    }
  };
};

const funAddDoctor = (model) => {
  return async (req, res, next) => {
    const { name, gendr, email, phone, specialization, title, msg, attend, price } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = appError.create(httpStatusText.FAIL, 400, errors.array());
      return next(error);
    }

    let newAttend;
    try {
      // تحويل كل عنصر في المصفوفة attend إلى كائن JSON
      newAttend = attend.map(item => JSON.parse(item));
    } catch (error) {
      // إذا فشل التحويل، يمكنك التعامل مع الخطأ هنا
      console.error('Error parsing JSON in attend array:', error);
      return res.status(400).json({ status: httpStatusText.FAIL, message: 'Invalid JSON format in attend array' });
    }

    const newDoctorData = {
      name,
      gendr,
      email,
      phone,
      specialization,
      title,
      msg,
      attend: newAttend,
      price,
    };

    if (req.file && req.file.filename) {
      newDoctorData.avatar = req.file.filename;
    }

    const newDoctor = new model(newDoctorData);

    await newDoctor.save();
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { newDoctor } });
  };
};


const funEditDoctor = (model) => {
  return async (req, res) => {
    const { name, gendr, email, phone, specialization, title, msg, attend, price } = req.body;

    let updateFields = { name, gendr, email, phone, specialization, title, msg, attend, price };
    if (req.file && req.file.filename) {
      updateFields.avatar = req.file.filename;
    }

    const doctor = await model.updateOne(
      { _id: req.params.id },
      { $set: updateFields }
    );

    res.json({ status: httpStatusText.SUCCESS, data: { doctor } });
  };
};


const funDeleteDoctor = (model) => {
  return async (req, res) => {
    await model.deleteOne({ _id: req.params.id });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
  };
};

module.exports = {
  funGetDoctors,
  funGetDoctor,
  funAddDoctor,
  funEditDoctor,
  funDeleteDoctor,
};
