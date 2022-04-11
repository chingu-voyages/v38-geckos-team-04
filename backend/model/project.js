const mongoose = require('mongoose');

const { Schema, model } = mongoose;

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
    },
    category: {
        type: Array,
        of: String,
        required: true
    },
    epics: {
        type: Array,
        of: String,
        required: true
    },
    "links_to_resource": {
        type: Array,
        of: String
    },
    examples: {
        type: Array,
        of: Mixed
    },
    challenge: String
});

const Project = model("Project", projectSchema);