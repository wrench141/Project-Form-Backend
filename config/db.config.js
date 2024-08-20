const mongoose = require("mongoose");
require("dotenv").config();

const initiateDb = async (next) => {
  try {
    mongoose.connect(process.env.DB).then(() => {
      console.log("DB connected");
      next();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = initiateDb;