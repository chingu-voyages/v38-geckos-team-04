const express = require('express');

// import main route
const main = require('./routes/mainRoute');

// expose the express api into the app const
const app = express();


// parse application/json content-type
app.use(express.json());

// use the mainRoute
app.use("/", main);

// create server
app.listen(5000, () => {
    console.log('Visit http://localhost:5000/ on a browser');
});