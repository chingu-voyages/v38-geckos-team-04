// import dotenv, express, serverApiVerson and mongoose modules
require('dotenv').config();
const express = require('express');
const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const path = require('path');

// import main route
const API = require('./routes/api');

// expose the express api into the app const
const app = express();

// read the PORT environment variable into port
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.DB_URI;

// parse application/json content-type
app.use(express.json());

// use the mainRoute
app.use("/api", API);

// mongoose connection options
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1
}

// create database connection
mongoose.connect(MONGODB_URI, options)

// create server
app.listen(PORT);