const Visit = require("../model/visit");
const httpStatusText = require("../utils/httpStatusText");
const { validationResult } = require("express-validator");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");



const getVisits = asyncWrapper(async (req, res) => {
    const visits = await Visit.find({}, { __v: false });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { visits } });
});

const getVisit = asyncWrapper(async (req, res, next) => {
    const visit = await Visit.findById(req.params.id);
    if (!visit) {
        const error = appError.create(httpStatusText.FAIL, 404, "visit not found");
        return next(error);
    } else {
        res.status(200).json({ status: httpStatusText.SUCCESS, data: { visit } });
    }
});

const addVisit = asyncWrapper(async (req, res, next) => {
    const { specialization, doctor, bookingDate, attend, check, price, idUser, diagnosis } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = appError.create(httpStatusText.FAIL, 400, errors.array());
        return next(error);
    }

    const newVisit = new Visit({
        specialization, doctor, bookingDate, attend, check, price, idUser, diagnosis
    });

    await newVisit.save();
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { newVisit } });

});

const editVisit = asyncWrapper(async (req, res) => {
    const { check, diagnosis } = req.body;

    let updateFields = { check, diagnosis };

    if (req.file && req.file.filename) {
        updateFields.prescription = req.file.filename;
    }

    const visit = await Visit.updateOne(
        { _id: req.params.id },
        { $set: updateFields }
    );
    res.json({ status: httpStatusText.SUCCESS, data: { visit } });
});


const deleteVisit = asyncWrapper(async (req, res) => {
    await Visit.deleteOne({ _id: req.params.id });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});


module.exports = {
    getVisits,
    getVisit,
    addVisit,
    editVisit,
    deleteVisit,
};

