const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.getUserById = (id, next) => {
  User.findById(id, next);
}
module.exports.getUserByUsername = (username, next) => {
  const query = {username: username}
  User.findOne(query, next);
}

module.exports.addUser = (newUser, next) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(next);
    });
  });
}

module.exports.comparePassword = (candidatePassword, hash, next) => {
  bcrypt.compare(candidatePassword, hash, (err,isMatch) => {
    if(err) throw err;
    next(null, isMatch);
  });
}
