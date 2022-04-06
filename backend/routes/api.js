//This is a demo route

// import expressjs
const express = require('express');

// import appController
const appController = require('../controller/appController');

// initialize express Router
const router = express.Router();

// set up get route for visit to localhost:5000/
router.get('/', appController);

// export router
module.exports = router;