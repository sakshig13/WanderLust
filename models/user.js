const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);  // Automatically implement username, hashing, salting, hash passwords and many other methods from scratch.

module.exports = mongoose.model('User', userSchema);


// We used pbkdf2 hashing algorithm 