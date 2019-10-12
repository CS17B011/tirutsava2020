require('dotenv/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const users = require('./routes/users');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);


app.get('/',(req,res) => {
	res.send("<h1>Tirutsava 2020 Website Backend</h1>");
});

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});
