const {
  registerUser,
  getUsers,
  getUser,
  removeUser,
  modifyData,
  loginUser,
} = require("../controllers/user");

const userRouter = require("express").Router();

userRouter.get("/getUser/:id", getUser);
userRouter.get("/getUsers", getUsers);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.patch("/modifyData/:id", modifyData);
userRouter.delete("/removeUser/:email", removeUser);

module.exports = userRouter;