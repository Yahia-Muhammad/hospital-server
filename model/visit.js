const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
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

    attend: {
        type: Object,
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

    idUser: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Visit", visitSchema);
