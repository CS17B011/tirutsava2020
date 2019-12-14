const crossword = require('../models/c3');
const express = require('express');
const router = express.Router();

router.post('/questionAns',(req,res)=>{
   console.log(req.body);
   /*
   this req.body will come from frontend of admin panel of c3
   here req.body will look like this
        {
            quesAns:[
                {
                    ans:<String>,
                    question:<String>,
                    startX:<Number>,
                    startY:<Number>,
                    endX:<Number>,
                    endY:<Number>
                }
            ],
            rowLength:<Number>,
            columnLength:<Number>,
            totalNumberOfQues:<Number>
        }
   */
    var newCrossword = new crossword({});
    for(var i=0;i<req.body.totalNumberOfQues;i++){
        newCrossword.quesAns.push(req.body.quesAns[i]);
    }
    newCrossword.rowLength = req.body.rowLength;
    newCrossword.columnLength = req.body.columnLength;
    newCrossword.totalNumberOfQues = req.body.totalNumberOfQues;
    newCrossword.save((err)=>{
        if (err){
            return res.json({
                err:err,
                msg:"Error in saving crossWord"
            });
        }
        res.json({
            success:"succesfully stored ans-quest in database"
        })
    });
})




module.exports = router;