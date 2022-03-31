const express = require('express');

const app = express();

// parse application/json content-type
app.use(express.json());

// demo response from the server
app.get("/", (req, res, next) => {
    // create dummy javascript object
    const appIdea = {
        id: Math.random(),
        name: "blog",
        category: "full stack",
        difficulty: "intermediate",
        summary: "a blog web app",
    };

    // convert object to json
    const dummyJSON = JSON.stringify(appIdea);
 
    // set the response status and send the json data
    res.status(200).send(dummyJSON);
})

// create server
app.listen(5000, () => {
    console.log('Visit http://localhost:5000/ on a browser');
});