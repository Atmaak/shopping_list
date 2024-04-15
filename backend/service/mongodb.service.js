const { MongoClient, ServerApiVersion } = require('mongodb');
const username = encodeURIComponent("atmaak");
const password = encodeURIComponent("kokot");
const uri = `mongodb+srv://${username}:${password}@tomasprojekt.l4xpyze.mongodb.net/?retryWrites=true&w=majority&appName=TomasProjekt`;

const client = new MongoClient(uri);

async function init() {
  try {
    await client.connect();
    await client.db("calendar").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}

init()

module.exports = {
  client
};