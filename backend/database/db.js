/* 
This is where the database connection lives
The connection to mongoDB will be made here and then exported
so that it can be used in other files where connection to the 
database is required.

*/


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
