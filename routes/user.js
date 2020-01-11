const express = require('express');
const userRouter = express.Router();
const User = require('../model/User');
const ObjectId = require('mongoose').Types.ObjectId
// READ
userRouter.get('/', (req, res) => {
    //id = String(id);
    console.log("raj");
    User.findById(new ObjectId(req.query.id), (err, response) => {
        if (err) res.status(500).json({
            message : "Unable to get"
        })
        else {
            console.log(req.query.id);
            res.status(200).json({response})
        }
    })
})

// POST

userRouter.post('/', (req, res) => {
    const user = new User(req.body);
    user.save((err, response) => {
        if (err) res.status(500).json({
            message : "Unable to add data"
        })
        else res.status(200).json({
            message : "added"
        })
    })
})

// UPDATE 

userRouter.put('/:id', (req, res) => {
    User.findOneAndUpdate({_id : req.params.id}, req.body, {runValidators : true}, (err, response) => {
        if(err) {
            console.error(err);
            res.status(500).json({message:{
                msgBody : "Unable to Update User",
                msgError : true
            }});
        }
        else
        res.status(200).json({message:{
            msgBody: "Successfully Updated User",
            msgError : false
        }});   
    })
})
module.exports = userRouter;