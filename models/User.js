const mongoose = require("mongoose");

// mongoose model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }, 
    email: {
        type: String,
        require: true,
    }, 
    password: {
        type: String,
        require: true,
    },
    balance: {
        type: Number,
        require: true,
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = {User};