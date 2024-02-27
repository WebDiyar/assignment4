const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://Diyar:Asd__200205_tr@diyar.qhyiil5.mongodb.net/assignment4_backend";

async function connectToMongoDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas", error);
    throw error;
  }
}

module.exports = { connectToMongoDB };