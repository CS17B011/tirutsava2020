const express = require('express');
const router = express.Router();

const Query = require('../models/Query.js');

/*
  GET,PUT(Answer Only) => Admin
  POST,PUT,DELETE => User specific
*/

//Route GET /queries
//Getting all Asked Questions
router.get('/', (req,res) => {
  Query.find()
      .sort({ date: 1 })  //Increasing sorting
      .then((questions) => res.json(questions))
});

//Route POST queries/create
//Adding new Question
router.post('/create', (req,res) => {
  const newQuery = Query({
    question: req.body.question,
    email: req.body.email
  });
  newQuery.save()
  .then(ques => res.json(ques))
  .catch(err => res.json({"error":"Somethin went wrong in queries/create"}));
});

//Route PUT queries/update/id
//Updating new Question
router.put('/update/:id', (req,res) => {
  Query.updateOne({"_id": req.params.id},
      {$set: {"answer": req.body.answer , "date" : Date.now()}})
      .then(answer => res.json(answer))
      .catch(err => res.status(400).json({"msg" : "Bad Request!!"}));
});

//Route DELETE queries/delete/id
//Delete Question
router.delete('/delete/:id',(req,res) => {
	Query.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router;