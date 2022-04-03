require('dotenv').config();
const express = require('express');

// import main route
const main = require('./routes/mainRoute');

// expose the express api into the app const
const app = express();
const local = process.env.PORT;

// parse application/json content-type
app.use(express.json());

// use the mainRoute
app.use("/", main);

// create server
app.listen(local, () => {
    console.log(`Visit http://localhost:${local}/ on a browser`);
});