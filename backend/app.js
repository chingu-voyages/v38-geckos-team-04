require('dotenv').config();
const express = require('express');
const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

// import main route
const API = require('./routes/api');

// expose the express api into the app const
const app = express();

// read the PORT environment variable into port
const port = process.env.PORT;
const uri = process.env.DB_URI;

// parse application/json content-type
app.use(express.json());

// use the mainRoute
app.use("/api", API);

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1
}

// create database connection
mongoose.connect(uri, options).then(result => {
    console.log(result.Collection);
}).catch(error => {
    console.log(error.message);
})

// create server
app.listen(port, () => {
    console.log(`Visit http://localhost:${port}/ on a browser`);
});