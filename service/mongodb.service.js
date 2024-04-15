const { MongoClient } = require('mongodb');
const username = encodeURIComponent("atmaak");
const password = encodeURIComponent("kokot");
const uri = `mongodb+srv://${username}:${password}@cluster0.tgzj0op.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

const init = async () => {
  try {
    await client.connect()
    await client.db("shopping_list").command({ ping: 1 })
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } finally {
    // await client.close();
  }
}

init()

module.exports = {
  client: client.db("shopping_list")
}