const question = require('../models/c3');
const express = require('express');
const router = express.Router();

router.post('/questionAns',(req,res)=>{
   console.log(req.body);
    const newQuestion = new question({
        ans :req.body.ans,
        question:req.body.question,
        startX:req.body.startX,
        startY:req.body.startY,
        endX:req.body.endX,
        endY:req.body.endY
    });

    newQuestion.save((err)=>{
        console.log(`error whie saving is ${err}`);
        res.json({
            success:"succesfully stored ans-quest in database"
        })
    });
})

module.exports = router;