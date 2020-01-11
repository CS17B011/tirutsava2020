require('dotenv/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const c3 = require('./routes/c3');
const user = require('./routes/user');
app.use('/c3', c3);
app.use('/user', user);
mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

app.get('/',(req,res) => {
	res.send("<h1>Tirutsava 2020 Website Backend</h1>");
});

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});
