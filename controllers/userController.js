const User = require("../model/users");
const httpStatusText = require("../utils/httpStatusText");
const { validationResult } = require("express-validator");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const generateJwt = require("../utils/generateJwt");



const getUsers = asyncWrapper(async (req, res) => {
    const users = await User.find({}, { __v: false, "password": false });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { users } });
});

const getUser = asyncWrapper(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        const error = appError.create(httpStatusText.FAIL, 404, "course not found");
        return next(error);
    } else {
        res.status(200).json({ status: httpStatusText.SUCCESS, data: { user } });
    }
});

const addUser = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = appError.create(httpStatusText.FAIL, 400, errors.array());
        return next(error);
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ status: httpStatusText.SUCCESS, data: { newUser } });
});

const editUser = asyncWrapper(async (req, res) => {
    const user = await User.updateOne(
        { _id: req.params.id },
        { $push: { ...req.body } }
    );
    res.json({ status: httpStatusText.SUCCESS, data: { user } });
});

const deleteUser = asyncWrapper(async (req, res) => {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});

// Auth

const register = asyncWrapper(async (req, res, next) => {
    const { name, gendr, email, phone, password, country, state, date, role } = req.body;

    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
        const error = appError.create(httpStatusText.FAIL, 400, "User already exists");
        return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        gendr,
        email,
        phone,
        password: hashedPassword,
        country,
        state,
        date,
        role,
    })

    // generate jwt token

    const token = await generateJwt({ email: newUser.email, id: newUser._id, role: newUser.role });

    newUser.token = token;

    await newUser.save();

    res.status(200).json({ status: httpStatusText.SUCCESS, data: { newUser } });

});

const login = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email && !password) {
        const error = appError.create(500, httpStatusText.ERROR, "check email and password");
        return next(error);
    }

    const getUser = await User.findOne({ email: email });

    if (!getUser) {
        const error = appError.create(httpStatusText.FAIL, 400, "invalid email");
        return next(error);
    }

    const matchedPassword = await bcrypt.compare(password, getUser.password);

    if (!matchedPassword) {
        const error = appError.create(httpStatusText.ERROR, 500, "invalid password");
        return next(error);
    }

    if (getUser && matchedPassword) {

        // logged in success
        const token = await generateJwt({ email: getUser.email, id: getUser._id, role: getUser.role });
        const id = getUser._id
        res.status(200).json({ status: httpStatusText.SUCCESS, data: { token, id } });

    } else {
        const error = appError.create(httpStatusText.ERROR, 500, "somthing wrong");
        return next(error);
    }
});


module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser,
    register,
    login
};

