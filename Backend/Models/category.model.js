const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title : {
        type : String,
    }
});
const CategoryMoodel = mongoose.model("categories", CategorySchema);

module.exports = CategoryMoodel;