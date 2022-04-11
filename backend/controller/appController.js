/* 
This is a controller file. In the MVC framework, the Model (business logic, data)
is separated from the Views (the user facing logic). However, sometimes the Views needs
to communicate with the Model to get data to display. In that situation, it is the 
Controller that bridges the gap. The Controller talks to the Model and sends that response
to the Views.
*/

const fs = require('fs');
const path = require('path');
const project = require('./model/project');

/**
 * @description
 * This function will receive the request and response objects and handle the request
 * and response for the target route.
 * 
 * @param {object} req This is the request object. It contains the request methods and properties.
 * @param {object} res This is the response object. It contains the response methods and properties.
 * @param {function} next This function is used to call the next middleware in order not to block 
 * code execution. This is optional.
 * 
 * @returns {void}
 */
const appController = (req, res, next) => {
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

    // set the content-type header, response status and send the json data
    res.setHeader("Content-Type", "application/json").status(200).send(dummyJSON);
}

// export appController
module.exports = appController;