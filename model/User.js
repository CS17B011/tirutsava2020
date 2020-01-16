const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    gameState : [],
    hintTaken : [{
        index : Number,
        hint : Number
    }],
    isSubmit : {
        type : Boolean
    }, 
    timeTaken : {
        type : Number
    }
})

module.exports = mongoose.model('User', userSchema);