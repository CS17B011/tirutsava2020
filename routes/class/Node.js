//code to interact with raj-garg frontend code 
//this code basically will interact with raj-garg frontend code and it will help to give hints per cell
class Node{
    constructor(val){
        this.val = val;//to be their in number
        this.hint = "hint to be their in few hours"; // to be their in string
        this.startingCharacter  = false // to be their in boolean value
        this.questionNo = 0;
        this.rowIndex = 0;
        this.columnIndex=0;
    }

    changeVal = (val)=>{
        console.log(`inside changeVal is ${val}`);
        this.val = val;
    }

    changeHint  = function(hint){
        this.hint = hint;
    }

    changeStartingCharacter = function(){
        this.startingCharacter = !this.startingCharacter;
    }

    changeQuestionNo = function(questionNo){
        this.questionNo = questionNo;
    }

    getValue = ()=>{
        return this.val;
    }

    changeRowIndex = (row)=>{
        this.rowIndex = row;
    }
    changeColumnIndex = (column)=>{
        this.columnIndex = column;
    }

}

module.exports = Node;