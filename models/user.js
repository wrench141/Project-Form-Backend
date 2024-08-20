const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { isEmail } = require("validator");
require("dotenv").config();

const UserSchema = mongoose.Schema({
  email: { type: String, required: true, validate: [isEmail, "Invalid Email"] },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hash = await bcrypt.hash(this.password, 11);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    { email: this.email },
    process.env.SALT,
    {
      expiresIn: "1h", 
    }
  );
  return token;
};

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
