const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const C3 = new Schema({
    
    questions : [{
        index : Number, 
        Q : String,
        time : {
            startDate : Number,
            startTimeHours : Number,
            startTimeMins : Number
        }
    }],
    hints : [{
        index : Number,
        H : String,
        time : {
            startDate : Number,
            startTimeHours : Number,
            startTimeMins : Number
        }
    }],
    answerArray : [{
        index : Number,
        answer : String
    }],
    start : {
        startDate : Number,
        startTimeHours : Number,
        startTimeMins : Number
    },
    end : {
        endDate : Number,
        endTimeHours : Number,
        endTimeMins : Number
    }
})

module.exports = mongoose.model('C3', C3);