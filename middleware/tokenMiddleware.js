const UserModel = require("../models/user")
const jwt = require("jsonwebtoken");
require("dotenv").config();

function TokenAuth(req, res, next){
    try {
        const token = req.headers.token;
        const email = jwt.decode(token, process.env.SALT);
        if(email != ""){
            const user = UserModel.findOne({email});
            if(user){
                next()
            }else{
                res.status(403).json({data: "Invalid Credintials"})
            }
        }else{
            res.status(403).json({data: "Forbidden"})
        }
    } catch (error) {
        res.status(500).json({data: "server error"})
        console.log(error)
    }
}

module.exports = TokenAuth