const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    gendr: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: false,
    },

    attend: {
        type: String,
        required: true,
    },

    specialization: {
        type: String,
        required: true,
    },

    doctor: {
        type: String,
        required: true,
    },

    bookingDate: {
        type: String,
        required: true,
    },

    check: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    roleId: {
        type: String,
        required: false,
    },

    reservationNum: {
        type: String,
        required: false,
    },

    idUser: {
        type: String,
        required: false,
    },

    idVisit: {
        type: String,
        required: false,
    },

    diagnosis: {
        type: String,
        default: "Default",
    },

    prescription: {
        type: String,
        default: "default-prescription.jpg",
    },
});

module.exports = mongoose.model("Book", bookSchema);
