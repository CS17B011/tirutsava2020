const mongoose = require('mongoose');
const Node = require('../routes/class/Node');

crossWordSchema = new mongoose.Schema({
    //question
    quesAns:[{
        ans:{
            type:String,
            default:''
        },
        question:{
            type:String,
            default:''
        },
        startX:{
            type:Number,
            default:0
        },
        startY:{
            type:Number,
            default:0
        },
        endX:{
            type:Number,
            default:0
        },
        endY:{
            type:Number,
            default:0
        }
    }] ,
    rowLength:{
        type:Number,
        default: 5
    },
    columnLength:{
        type:Number,
        default:5
    },
    totalNumberOfQues:{
        type:Number,
        default:0
    },
    realCrossword:{
        type:Array(Array({
            type:Object
        }))
    },
    stringCrossword:{
        type:Array()
    }
});

module.exports = mongoose.model('crossword',crossWordSchema);