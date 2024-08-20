const express = require("express");
const cors = require("cors");
const formRouter = require("../routes/form");
const userRouter = require("../routes/user");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

//api's
app.use("/api.v1/form", formRouter);
app.use("/api.v1/users", userRouter)

module.exports = app;
