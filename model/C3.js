const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const C3 = new Schema({
    
    questions : [{
        index : Number, 
        Q : String
    }],
    hints : [{
        index : Number,
        H : String
    }],
    answerArray : [{
        index : Number,
        answer : String
    }]
})

module.exports = mongoose.model('C3', C3);