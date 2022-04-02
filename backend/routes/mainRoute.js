//This is a demo route

const express = require('express');
const appController = require('../controller/appController');

const router = express.Router();

router.get('/', appController);

module.exports = router;