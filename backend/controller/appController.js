/* 
This is a controller file. In the MVC framework, the Model (business logic, data)
is separated from the Views (the user facing logic). However, sometimes the Views needs
to communicate with the Model to get data to display. In that situation, it is the 
Controller that bridges the gap. The Controller talks to the Model and sends that response
to the Views.
*/

const fs = require('fs');
const path = require('path');
const Project = require('../model/project');

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
    // save path to schema.json file into JSONFile
    const JSONFile = path.join(__dirname, "..", "..", "schema.json");
   
    // read content of schema.json
    fs.readFile(JSONFile, "utf8", (err, content) => {
        if (err) {
            console.log(err);
            return;
        }
        // parse json content to JavaScript array
        const parseContent = JSON.parse(content);
        // loop over the array
        for (const p of parseContent) {
            //create a model for each element of the array
           let newProject = new Project(p);
           // save the created document to the database
           newProject.save().then(doc => {
               console.log(doc);
           });
        }
        res.setHeader("Content-Type", "application/json").status(200).send(content);
    });
}

// export appController
module.exports = appController;