/* 
This is where the database connection lives
The connection to mongoDB will be made here and then exported
so that it can be used in other files where connection to the 
database is required.

*/

require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const db = client.db('app')
const project = db.collection('projects');

module.exports = project;
