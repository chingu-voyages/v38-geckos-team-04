// import expressjs
const express = require('express');

// import apiControl
const apiControl = require('../controller/apiControl');

// initialize express Router
const router = express.Router();

// set up get route for visit to localhost:5000/
router.get('/', apiControl);

// export router
module.exports = router;