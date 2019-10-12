const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const config = require('../config/database');

// Register
router.post('/register', (req,res,next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.findOne({email: req.body.email}, (err, user) => {
    if(err) throw err;
    if(user)
      res.json({success:false, msg: "Email already exists"});
    else{
      User.findOne({username: req.body.username}, (err, user) => {
        if(err) throw err;
        if(user)
          res.json({success:false, msg: "Username already exists"});
        else{
          User.addUser(newUser, (err, user) => {
            if(err){
              res.json({success:false, msg: "Failed to register user"});
            }
            else {
              res.json({success:true, msg: "User Registered"});
            }
          });
        }
      });
    }
  });


});

// Authenticate
router.post('/authenticate', (req,res,next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err,user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: "User not found"});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data:user}, config.secret, {
          expiresIn: 604800 //1 week
        });
        res.json({success: true, token: "Bearer "+token,
          user: {
            id: user._id,
            username: user.username,
            name: user.name,
            email: user.email
          }
      });
      }
      else{
        return res.json({success: false, msg:"Wrong Password"});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
