const mongoose = require('mongoose');

crossWordSchema = new mongoose.Schema({
    //question
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
    
    
});

module.exports = mongoose.model('crossword',crossWordSchema);