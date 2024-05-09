const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    category : {
        type : mongoose.mongoose.Schema.Types.ObjectId,
        ref : "categories",
    },
    description : {
        type : String,
    },
    thumbnail : {
        type : String,
    },
    user : {
        type : mongoose.mongoose.Schema.Types.ObjectId,
        ref : "users",
    },
});

const BlogModel = mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;