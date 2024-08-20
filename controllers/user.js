const UserModel = require("../models/user");
const bcrypt = require("bcryptjs")

const registerUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const extUser = await UserModel.findOne({email});
    if(!extUser){
      const User = new UserModel({
        email, password
      });
      await User.save();
      const token = User.generateToken();
      res.status(200).json({ data: "user created", token})
    }else{
      res.status(400).json({ data: "email already exists" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "server error" });
  }
};

const loginUser = async(req, res) => {
  try {
    const {email, password} = req.body;
    const extUser = await UserModel.findOne({email});
    if(!extUser){
      res.status(404).json({ data: "user not found" })
    }else{
       const hashCompare = await bcrypt.compare(password, extUser.password);
       if (!hashCompare) {
         res.status(403).json({ data: "Invalid credintials" });
       }else{
          const token = extUser.generateToken();
          res.status(200).json({ data: "user logged in", token });
       }
    }
   

  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "server error" });
  }
}

const getUsers = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "server error" });
  }
};

const removeUser = async (req, res) => {
  try {
    const email = req.params.email;
    await UserModel.findOneAndDelete({email});
    res.status(200).json({ data: "user deleted" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "server error" });
  }
};

const modifyData = async (req, res) => {
  try {
    const id = req.params.id;
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "server error" });
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUser,
  removeUser,
  modifyData,
  loginUser,
};
