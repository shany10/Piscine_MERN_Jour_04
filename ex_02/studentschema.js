var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    StudentId: Number,

    login: {
        type: String,
        minLength: 5,
        maxLength: 20,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: Boolean,
        required: true,
    },

    // Roll:Number,
    // Address:String
});

module.exports = mongoose.model('student', StudentSchema, 'Students');



