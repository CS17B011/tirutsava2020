const express = require('express');
const router = express.Router();

const FAQ = require('../models/FAQ.js');

/*Access for all the routes is private expect GET /faqs route.*/

//Route GET /faqs
//Getting all FAQs
router.get('/', (req,res) => {
  FAQ.find()
    .then((faqs) => res.json(faqs))
});

//Route POST faqs/create
//Adding new FAQ
router.post('/create', (req,res) => {
  const newFAQ = FAQ({
    question: req.body.question,
    answer: req.body.answer
  });
  newFAQ.save()
  .then(ques => res.json(ques))
  .catch((err)=>{
    res.json(err)
  });
});


//Route UPDATE faqs/update/id
//Update FAQ
router.put('/update/:id', (req,res) => {
  const updatedFAQ = {
    question: req.body.question,
    answer: req.body.answer
  };
  FAQ.updateOne({"_id": req.params.id},
      updatedFAQ)
      .then(answer => res.json(answer))
      .catch(err => res.status(400).json({"error" : "Bad Request!!"}));
});


//Route DELETE faqs/delete/id
//Delete FAQ
router.delete('/delete/:id',(req,res) => {
	FAQ.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router;