const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const ObjectID = require("mongodb").ObjectID;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getEmotions = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("moodr");

  try {
    const result = await db.collection("emotions").find().toArray();
    if (result) {
      res.status(200).json({
        status: 200,
        data: result,
      });
    } else {
      console.log("broken!");
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
  client.close();
};

const postMoodr = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("moodr");

  const result = await db.collection("moodrs").insertOne(req.body);

  try {
    res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

const getAllMoods = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("moodr");

  try {
    const result = await db.collection("moodrs").find().toArray();
    if (result) {
      res.status(200).json({
        status: 200,
        data: result,
      });
    } else {
      console.log("broken!");
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
  client.close();
};

const deleteMoodr = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("moodr");

  try {
    console.log(req.body);
    const { _id } = req.body;
    const result = await db.collection("moodrs").deleteOne({
      _id: ObjectID(_id),
    });

    if (result) {
      res.status(200).json({
        status: 200,
        data: result,
      });
    } else {
      console.log("broken!");
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
  client.close();
};

module.exports = {
  getEmotions,
  postMoodr,
  getAllMoods,
  deleteMoodr,
};
