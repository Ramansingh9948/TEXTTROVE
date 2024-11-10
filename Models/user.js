// Models/user.js
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    // password field will be handled by passport-local-mongoose
});

// Adding passport-local-mongoose to the user schema
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = mongoose.model('User', UserSchema);

module.exports = User;
