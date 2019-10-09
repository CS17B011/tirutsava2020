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

mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

app.get('/',(req,res) => {
	res.send("<h1>Tirutsava 2020 Website Backend</h1>");
});

//Routes
app.use('/events',require('./routes/events.js'));
app.use('/faqs',require('./routes/faqs.js'));
app.use('/queries',require('./routes/queries.js'));

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});