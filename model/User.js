const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    gameState : [],
    isVisible : [],
    colorValue : [],
    answers : [
        {index : Number,
        isLock : Number,
        time : {
            hour : Number,
            min : Number,
            sec : Number
        }}
    ]
})

module.exports = mongoose.model('User', userSchema);