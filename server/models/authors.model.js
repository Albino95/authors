const mongoose = require("mongoose");

// Const the model:
// Const te Schema
const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please insert the name of the Author"],
        minLength: [3, "There is no record off any author with a 3 character name, please enter more than 3!"]
    }
}, {timestamps: true});

// "Packing " the Schema
const Author = mongoose.model("Author" , AuthorSchema);

module.exports = Author;