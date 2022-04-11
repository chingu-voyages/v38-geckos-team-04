const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    }, 
    tier: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true
    }

});