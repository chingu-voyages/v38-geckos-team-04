const express = require('express');

const app = express();

// parse application/json content-type
app.use(express.json());

// demo response from the server
app.get("/", (req, res, next) => {
    // create javascript object
    const dummyContent = {
        name: "App Finder",
        stack: "MERN",
        team: "Jacek, Lauren, Moody",
    };

    // convert object to json
    const dummyJSON = JSON.stringify(dummyContent);
 
    // set the response status and send the json data
    res.status(200).send(dummyJSON);
})

// create server
app.listen(5000, () => {
    console.log('Visit localhost:5000/ on a browser');
});