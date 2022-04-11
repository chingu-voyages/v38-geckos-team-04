require('dotenv').config();
const express = require('express');
const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// import main route
const API = require('./routes/api');

// expose the express api into the app const
const app = express();

// read the PORT environment variable into port
const PORT = process.env.PORT;
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
mongoose.connect(MONGODB_URI, options).then(result => {
    console.log('Connected successfully to the Database');
}).catch(error => {
    console.log('Connection failed! Please ensure you have a network connection.');
})

// create server
app.listen(PORT, () => {
    console.log(`Visit http://localhost:${PORT}/api on a browser`);
});