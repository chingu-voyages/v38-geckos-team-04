require('dotenv').config();
const express = require('express');

const app = express();

// parse application/json content-type
app.use(express.json())