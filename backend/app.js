require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

// parse application/json content-type
app.use(express.json())

// create server
app.listen(() => {
    console.log(`Now running on port ${PORT}`);
}, PORT);