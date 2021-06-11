// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const { MONGO_URI } = process.env;

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let db;

// const dbFunction = async (dbName) => {
//   const client = await MongoClient(MONGO_URI, options);

//   await client.connect();

//   const db = client.db("moodr");
//   console.log("connected! connect");

//   client.close();
//   console.log("disconnected! connect");
// };

// module.exports = { dbFunction, db: () => db };
