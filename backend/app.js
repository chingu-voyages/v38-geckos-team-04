const express = require('express');

const app = express();

// parse application/json content-type
app.use(express.json());

// create server
app.listen(5000, () => {
    console.log('Visit localhost:5000/ on a browser');
});