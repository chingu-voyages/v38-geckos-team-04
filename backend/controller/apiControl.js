/* 
This is a controller file. In the MVC framework, the Model (business logic, data)
is separated from the Views (the user facing logic). However, sometimes the Views needs
to communicate with the Model to get data to display. In that situation, it is the 
Controller that bridges the gap. The Controller talks to the Model and sends that response
to the Views.
*/

// import the project module
const Project = require('../model/project');

/**
 * @description
 * This function will receive the request and response objects and handle the request
 * and response for the target route.
 * 
 * @param {object} req This is the request object. It contains the request methods and properties.
 * @param {object} res This is the response object. It contains the response methods and properties.
 * 
 * @returns {void}
 */
const apiControl = (req, res) => {
        // extract name from the payload
        const { name } = req.body;

        Project.find({tier: name}).exec((err, result) => {
                // add better error handling
                if (err) return;

                // set headers, status and send json data
                res.setHeader("Content-Type", "application/json")
                .status(200)
                .send(result);
        });
}

// export appController
module.exports = apiControl;