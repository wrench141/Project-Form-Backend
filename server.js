const app = require("./config/app")
const mongoose = require("mongoose");
const initiateDb = require("./config/db.config");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

initiateDb(() => {
    app.listen(PORT, () => {
        console.log("server started");
    })
})
