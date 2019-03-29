const express = require ('express');
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;

const app = express ();

passport.use (new GoogleStrategy ());

//
//clientSecret 
app.get ('/', (req, res) => {
  res.send ({hi: 'hello world'});
});

const PORT = process.env.PORT || 5000;
app.listen (PORT);
