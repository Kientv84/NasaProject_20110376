const mongoose  = require('mongoose');

const lauchesSchema = new mongoose.Schema({
    fightNumber: {
        type: Number,
        required: true,
    },

    lauchDate: {
        type: Date,
        required: true,
    },

    mission: {
        type: String,
        required: true,
    },

    rocket: {
        type: String,
        required: true,
    },

    target: {
        type: String,
        required: true,
    },

    customers:[string],
    upcomming: {
        type: Boolean,
        required: true,
    },

    success: {
        type: Boolean,
        required: true,
        default: true,
    },
});

module.exports = mongoose.model('lauch', lauchesSchema);