const mongoose = require("mongoose");
const Log = require("../models/Log");
const addLog = require("../middleware/logger");
require("dotenv").config();
const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const info = `Connected from ${process.env.baseUrl}`;

    addLog(info);

    console.log(info);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
