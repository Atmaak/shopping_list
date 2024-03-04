const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://atmaak:EAzZd9q2DboWKZiz@vecerniskola.vv90o2l.mongodb.net/?retryWrites=true&w=majority&appName=vecerniSkola`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)

// async function run() {
//   try {
//     const database = client.db('vecerniSkola')
//     const users = database.collection('users')
//     users.insertOne({
//       username: "atmaak",
//       password: "xdmoment"
//     })
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close()
//   }
// }
// run().catch(console.dir)

module.exports = client.db('vecerniSkola')
