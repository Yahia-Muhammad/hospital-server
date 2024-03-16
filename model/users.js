const mongoose = require("mongoose");
const titleRoles = require("../utils/titleRoles");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    gendr: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    phone: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
        default: "Egypt"
    },

    state: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: [titleRoles.USER],
        default: titleRoles.USER
    },

    token: {
        type: String,
    },

    visitis: {
        type: Array,
        required: false,
    }
});

module.exports = mongoose.model("User", userSchema);
