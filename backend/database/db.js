/* 
This is where the database connection lives
The connection to mongoDB will be made here and then exported
so that it can be used in other files where connection to the 
database is required.

*/


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://geckos-04:<password>@v38-geckos-04.d9qkz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
