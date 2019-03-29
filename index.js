const express = require ('express');
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;

const app = express ();

passport.use (new GoogleStrategy ());

//clientID 805258375604-au95intbjl9v0tof6sfobpkbm2q5ricu.apps.googleusercontent.com
//clientSecret 8NgH8McPuo7Cr4EkkLl4ggxM
app.get ('/', (req, res) => {
  res.send ({hi: 'hello world'});
});

const PORT = process.env.PORT || 5000;
app.listen (PORT);
