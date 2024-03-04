const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://atmaak:${process.env.MONGO_DB_PASSWORD}@vecerniskola.vv90o2l.mongodb.net/?retryWrites=true&w=majority&appName=vecerniSkola`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)

async function run() {
  try {
    const database = client.db('vecerniSkola');
    const movies = database.collection('users');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);