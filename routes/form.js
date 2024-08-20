const {saveFormData, getCompleteData, getInfo, deleteData, modifyData} = require("../controllers/form");
const TokenAuth = require("../middleware/tokenMiddleware");
const formRouter = require("express").Router();


formRouter.get("/getInduvidualData/:id", TokenAuth, getInfo);
formRouter.get("/getData", TokenAuth, getCompleteData);
formRouter.post("/saveData", saveFormData);
formRouter.patch("/modifyData/:id", TokenAuth, modifyData);
formRouter.delete("/deleteData/:id", TokenAuth, deleteData)

module.exports = formRouter