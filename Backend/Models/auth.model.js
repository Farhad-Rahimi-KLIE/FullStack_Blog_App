const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    username : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
});

const AuthMoodel = mongoose.model("users", authSchema);

module.exports = AuthMoodel;