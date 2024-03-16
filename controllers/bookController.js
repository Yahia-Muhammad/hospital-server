const Book = require("../model/book");
const httpStatusText = require("../utils/httpStatusText");
const { validationResult } = require("express-validator");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");



const getBooks = asyncWrapper(async (req, res) => {
    const books = await Book.find({}, { __v: false });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { books } });
});

const getBook = asyncWrapper(async (req, res, next) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        const error = appError.create(httpStatusText.FAIL, 404, "book not found");
        return next(error);
    } else {
        res.status(200).json({ status: httpStatusText.SUCCESS, data: { book } });
    }
});

const addBook = asyncWrapper(async (req, res, next) => {
    const { name, gendr, state, date, phone, email, attend, specialization, doctor, bookingDate, check, price, roleId, reservationNum, idUser, idVisit } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = appError.create(httpStatusText.FAIL, 400, errors.array());
        return next(error);
    }

    const newBook = new Book({
        name, gendr, state, date, phone, email, attend, specialization, doctor, bookingDate, check, price, roleId, reservationNum, idUser, idVisit
    });

    await newBook.save();
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { newBook } });

});

const editBook = asyncWrapper(async (req, res) => {
    const { check, diagnosis } = req.body;

    let updateFields = { check, diagnosis };

    if (req.file && req.file.filename) {
        updateFields.prescription = req.file.filename;
    }

    const book = await Book.updateOne(
        { _id: req.params.id },
        { $set: updateFields }
    );
    res.json({ status: httpStatusText.SUCCESS, data: { book } });
});

const deleteBook = asyncWrapper(async (req, res) => {
    await Book.deleteOne({ _id: req.params.id });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});


module.exports = {
    getBooks,
    getBook,
    addBook,
    editBook,
    deleteBook,
};

