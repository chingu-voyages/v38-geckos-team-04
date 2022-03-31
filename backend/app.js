const express = require('express');

// expose the express api into the app const
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
 
    // set the headers, response status and send the json data
    res.setHeader("Content-Type", "application/json").status(200).send(dummyJSON);
})

// create server
app.listen(5000, () => {
    console.log('Visit http://localhost:5000/ on a browser');
});