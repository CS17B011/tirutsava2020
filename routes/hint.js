const crossword = require('../models/c3');
const express = require('express');
const router = express.Router();
const Node = require('./class/Node');
let finalArr = [];


router.post('/crossword/:id',(req,res)=>{
    
    crossword.findById(req.params.id,(err,currentCrossword)=>{
        if (err){
            return res.json({
                err:err,
                msg:"Unable to find crosswords"
            });
        }
        var current;
        var x;
        // console.log(currentCrossword.quesAns);
        arr = new Array(currentCrossword.rowLength).fill(0);
        for(var i=0;i<currentCrossword.rowLength;i++){
            arr[i] = new Array(currentCrossword.columnLength).fill(0);
            for(var j=0;j<currentCrossword.columnLength;j++){
                arr[i][j] = new Node(0);
            }
        }
        for(var i=0;i<currentCrossword.totalNumberOfQues;i++){
            current = currentCrossword.quesAns[i];
            // var x='';
            if (current.startX === current.endX){
                // x='';
                for(var j=current.startY;j<=current.endY;j++){
                    // x+=current.ans[j-current.startY];
                    arr[current.startX][j].changeVal(current.ans[j-current.startY]);
                    arr[current.startX][j].changeRowIndex(current.startX);
                    arr[current.startX][j].changeColumnIndex(j);
                    if (j === current.startY){
                        arr[current.startX][j].changeStartingCharacter();
                        arr[current.startX][j].changeQuestionNo(i+1);
                    }
                }
            }else if (current.startY === current.endY){
                // x='';
                for(var j=current.startX;j<=current.endX;j++){
                    // x+=current.ans[j-current.startX];
                    arr[j][current.startY].changeVal(current.ans[j-current.startX]);
                    arr[j][current.startY].changeRowIndex(j);
                    arr[j][current.startY].changeColumnIndex(current.startY);
                    if (j === current.startX){
                        arr[j][current.startY].changeStartingCharacter();
                        arr[j][current.startY].changeQuestionNo(i+1);
                    }
                }
            }
            // console.log(x);
        }

        for (var i=0;i<arr.length;i++){
            x = '';
            for(var j=0;j<arr[i].length;j++){
                x+=arr[i][j].val;
            }
            finalArr.push(x);
            
        }
        currentCrossword.realCrossword = arr;
        currentCrossword.stringCrossword = finalArr;
        currentCrossword.save((err)=>{
            if (err){
                // console.log(`error in saving realCrossword is ${err}`);
                return res.json({
                    err:err,
                    msg:"err in saving realCrossword and stringCrossword"
                });
            }
            res.json({
                msg:"I am in crossword and hint route",
                crosswordInString:finalArr,
                realCrossword:arr   
            });
        })
        // console.log(finalArr);
        
    });
    
    
});

module.exports = router;