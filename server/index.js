"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getEmotions,
  postMoodr,
  getAllMoods,
  deleteMoodr,
} = require("./handlers");

const PORT = process.env.PORT || 8000;

const app = express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"));

// endpoints:
app.get("/api/allemotions", getEmotions);
app.get("/api/getallmoods", getAllMoods);
app.post("/api/postmoodr", postMoodr);
app.delete("/api/deletemoodr/", deleteMoodr);
// handle 404s
app.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
