// import mongoose module
const mongoose = require('mongoose');

// extract Schema and model constructor functions from mongoose module
const { Schema, model } = mongoose;

// define database schema
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
    "links_to_resources": {
        type: Array,
        of: String
    },
    examples: {
        type: Array,
        of: Schema.Types.Mixed
    },
    challenge: String
});

// define a model for each document based on schema
const Project = model("Project", projectSchema);

// export the project model
module.exports = Project;