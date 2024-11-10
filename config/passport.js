// config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/user'); // Adjust path to your User model

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        { usernameField: 'email' },
        User.authenticate() // Use passport-local-mongoose's authenticate method
    ));

    passport.serializeUser(User.serializeUser()); // Serialize user
    passport.deserializeUser(User.deserializeUser()); // Deserialize user
};
