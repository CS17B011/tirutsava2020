require('dotenv/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT =  process.env.PORT || 4000;
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const questionAns = require('./routes/questionAns');
const hint = require('./routes/hint');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/adminPanel',questionAns);
app.use('/c3',hint);

mongoose.connect('mongodb://localhost:27017/c3', {useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

app.get('/',(req,res) => {
	res.send("<h1>Tirutsava 2020 Website Backend</h1>");
});

// app.post('/')

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});
