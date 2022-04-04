require('dotenv').config();
const express = require('express');

// import main route
const main = require('./routes/mainRoute');

// expose the express api into the app const
const app = express();

// read the PORT environment variable into port
const port = process.env.PORT;

// parse application/json content-type
app.use(express.json());

// use the mainRoute
app.use("/", main);

// create server
app.listen(port, () => {
    console.log(`Visit http://localhost:${port}/ on a browser`);
});