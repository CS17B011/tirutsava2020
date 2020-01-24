import React, {Component, useImperativeHandle} from 'react';
import './crossword.styles.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import logo from '../sponsers/logo.jpeg';
import CreateMatrix from './createMatrix';
import Rodal1 from './rodal1.component';
import Rodal2 from './rodal2.component';
import Timer from '../crosspuzzle/timer';
import Instructions from './instructions';
class Crossword extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            // defining C3
            N : 30,
            M : 31,
            isSquare : "000000000010000000000000000000000000000001000000000000000000000000000000100000000000000000000000000000010000000000000000000000000000001000000000000000000000000000010100000000000000000000000000001010010000000000000000000000000101001100000000000000000000001111111111100000000000000000000001010001000000000000000011111111110000111111110000000000000000010000010001000000000000000000001000001000100000000000001111111100000100010000000000000000000010000010001000000000000000111111111001000100000000000000000000100000010000000000000000000000111111111000000000000000000000001000000100000000000000000000000000000010000000000000000000000000000001000000000000000000000000001111111111111111111100000000000000010000000000000000000000000000001000000000000000000000000000000100000000000000000000000000000010000000000000000000000011111111111111100000000000000000000000100000000000000000000000000000010000000000000000000000000000001000000000000000", // 1000101111111010101011111010001010000 static
            isQuestionCell: "000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000010000000000000000000000000000000100000000000000000000001000000000000000000000000000000000000000000000000000000010000000000000100010000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000010000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            isHintCell : "000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000010000000000000000000000000000001100000000000000000000001000100000000000000000000000000000000000000000000000000011000000000000100010000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000100001000000000100000000000000000000000000010000000000000000000000100000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            cellInfo : {
                "10" : {r : 'd', l : 10},
                "163" : {r : 'd', l : 14},
                "199" : {r : 'd', l : 3},
                "231" : {r : 'd', l : 9},
                "328" : {r : 'd', l : 6},
                "511" : {r : 'd', l : 14},
                "254" : {r : 'a', l : 11},
                "310" : {r : 'a', l : 10},
                "324" : {r : 'a', l : 8},
                "404" : {r : 'a', l : 8},
                "468" : {r : 'a', l : 9},
                "534" : {r : 'a', l : 9},
                "662" : {r : 'a', l : 20},
                "814" : {r : 'a', l : 15}
            },
            questionColor : Array(30 * 31).fill("red"),
            // start time
            start : {
                startDate : 30,
                startTimeHours : 11,
                startTimeMins : 50
            },
            // end time
            end : { 
                endDate : 30,
                endTimeHours : 11,
                endTimeMins : 50
            },
            instructions:"visible",
            crossword : "visible",
            // game variables
            questionArray: [],
            hintArray : [],
            squareValue : Array(30 * 31).fill('#'),
            colorValue : Array(30 * 31).fill("rgb(46, 14, 231)"),
            isVisible : Array(30 * 31).fill("hidden"),
            visible: false,
            visible2: false,
            cellKey : 0,
            inputError : "",
            currentQuestion : "",
            currentAnswer : "",
            currentHint : "",
            // condition for rendering instructions and crossword
            isTime : false,
            // Rodal variable
            change : true,
            rodalQuestion : {
                visibility : "visible",
                opacity : "1"},
            rodalHint : {
                visibility : "hidden",
                opacity : "0.7"},
            // user variable
            id : "5e286ab10d6b215af4c56561",
            user : {
                gameState : [],
                isVisible : [],
                colorValue : [],
                answers : [
                    
                ] /* {index : "",
                isLock : "",
                time : {
                    hour : "",
                    min : "",
                    sec : ""
                }} */
            }
        };
    }

    hide = () => {
        this.setState({ visible: false, inputError : "", currentQuestion:"", currentHint:"" });
        this.setState({visible2: false, inputError : ""});
        this.setState({rodalQuestion:{
            visibility : "visible",
            opacity : "1"}, 
            rodalHint:{
            visibility : "hidden",
            opacity : "0.7"}});
    }
    handleRodalQuestion = () => {
        this.setState({rodalQuestion:{
            visibility : "visible",
            opacity : "1"}, 
            rodalHint:{
            visibility : "hidden",
            opacity : "0.7"},
        change : true});
    }
    handleRodalHint = () => {
        this.setState({rodalQuestion:{
            visibility : "hidden",
            opacity : "0.7"}, 
            rodalHint:{
            visibility : "visible",
            opacity : "1"},
        change : false});
    }

    // event after clicking a cell
    handleClick = (key) => {
        //console.log(this.state.squareValue);
        this.setState({ visible: true, cellKey : key});
        let questionArray = this.state.questionArray;
        let hintArray = this.state.hintArray;
        let questionColor = this.state.questionColor;
        let currentQuestion = "", currentHint = "";
        for (let i = 0; i < questionArray.length; i++) {
            console.log(questionArray[i].index + " " + key);
            let today = new Date();
            let date = today.getDate(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
            let D = questionArray[i].time.startDate, H = questionArray[i].time.startTimeHours, M = questionArray[i].time.startTimeMins;
            let secondsLeft = (D - date) * 24 * 60 * 60 + (H - hour) * 60 * 60 + (M - min) * 60 - sec;
            // condition to display the question (caption)
            
            if (questionArray[i].index == key && secondsLeft <= 0) {
                console.log(hintArray[i]);
                currentQuestion = questionArray[i].Q;
                currentHint = hintArray[i].H;
            }
            let idx = parseInt(questionArray[i].index, 10);
            if (secondsLeft <= 0) questionColor[idx] = "forestgreen";
        }
        this.setState({
            currentQuestion : currentQuestion,
            currentHint : currentHint,
            questionColor : questionColor
        });
    }

    handleClick2 = (key) => {
        this.setState({ visible2: true, cellKey : key});
        let hintArray = this.state.hintArray;
        let currentHint = ""
        for (let i = 0; i < hintArray.length; i++) {
            //console.log(questionArray[i].index + " " + key);
            let today = new Date();
            let date = today.getDate(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
            let D = hintArray[i].time.startDate, H = hintArray[i].time.startTimeHours, M = hintArray[i].time.startTimeMins;
            let secondsLeft = (D - date) * 24 * 60 * 60 + (H - hour) * 60 * 60 + (M - min) * 60 - sec;
            // condition to display the question (caption)
            console.log(key);
            if (hintArray[i].index == key && secondsLeft <= 0) {
                //console.log(hintArray[i]);
                currentHint = hintArray[i].H
            }
        }
        let questionArray = this.state.questionArray;
        let questionColor = this.state.questionColor;
        for (let i = 0; i < questionArray.length; i++) {
            console.log(questionArray[i].index + " " + key);
            let today = new Date();
            let date = today.getDate(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
            let D = questionArray[i].time.startDate, H = questionArray[i].time.startTimeHours, M = questionArray[i].time.startTimeMins;
            let secondsLeft = (D - date) * 24 * 60 * 60 + (H - hour) * 60 * 60 + (M - min) * 60 - sec;
            // condition to display the question (caption)
            let idx = parseInt(questionArray[i].index, 10);
            if (secondsLeft <= 0) questionColor[idx] = "forestgreen";
        }
        this.setState({
            currentHint : currentHint,
            questionColor : questionColor
        });
    }

    handleOnChange = (input) => {
        let key = "" + this.state.cellKey;
        if (input.length !== this.state.cellInfo[key].l) {
            this.setState({inputError : `Input Length Must Be ${this.state.cellInfo[key].l}`});
        }
        else {
            this.setState({inputError : "", currentAnswer : input});
        }
    }
    handleOnSubmit = () => {
        let key = "" + this.state.cellKey;
        let input = this.state.currentAnswer;
        //console.log(this.state.cellInfo[key]);
        // check if contest is over or not
        let end = this.state.end;
        let today = new Date();
        let date = today.getDate(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
        let D = end.endDate, H = end.endTimeHours, M = end.endTimeMins;
        let secondsLeft = (D - date) * 24 * 60 * 60 + (H - hour) * 60 * 60 + (M - min) * 60 - sec;
        if (secondsLeft <= 0) {
            this.setState({
                inputError : "Contest is Over"
            })
        }
        else {
        // first check if this question is already lock or not
        let isLock = 0, user = this.state.user;
        //console.log(user.answers[0]);
        for (let i = 0; i < user.answers.length; i++) {
            if (user.answers[i].index == key && user.answers[i].isLock === 1) {
                //console.log(user.answers[i].index);
                isLock = 1;
                this.setState({inputError : "You have already locked this question"});
            }
        }
        if (isLock === 0 && input.length !== this.state.cellInfo[key].l) {
            this.setState({inputError : `Input Length Must Be ${this.state.cellInfo[key].l}`});
        }
        // if not locked
        else if (isLock === 0) {
            this.setState({inputError : ""});
            let squareValue = [], isVisible = [];
            for (let i = 0; i < 30 * 31; i++) {
                //console.log(this.state.squareValue[i]);
                squareValue[i] = this.state.squareValue[i];
                isVisible[i] = this.state.isVisible[i];
            }
            if (this.state.cellInfo[key].r === 'd') {
                for (let i = 0; i < this.state.cellInfo[key].l; i++) {
                    squareValue[this.state.cellKey + (i * 31)] = input[i].toUpperCase();
                    isVisible[this.state.cellKey + (i * 31)] = "visible";
                }
            }
            else {
                for (let i = 0; i < this.state.cellInfo[key].l; i++) {
                    squareValue[this.state.cellKey + i] = input[i].toUpperCase();
                    isVisible[this.state.cellKey + i] = "visible";
                }
            }
            // check if user already answered this question or not
            let isAlready = false;
            let user = this.state.user;
            for (let i = 0; i < user.answers.length; i++) {
                if (user.answers[i].index === key) isAlready = true;
            }
            
            user.gameState = squareValue;
            user.isVisible = isVisible;
            // if not answered then push answer object in user's answers array
            if (isAlready === false) {
                user.answers.push({
                    index : key,
                    isLock : 0,
                    time : {
                        hour : 24,
                        min : 0,
                        sec : 0
                    }
                })
            }
            // then set the state
            //console.log(squareValue);
            this.setState({
                squareValue : squareValue,
                isVisible : isVisible,
                user : user
            });

        }}
    }


    // handle for Lock
    handleOnLock = () => {
        // write your code here
        //prompt("Hello World!")
        // check if contest over or not
        let end = this.state.end;
        let today = new Date();
        let date = today.getDate(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
        let D = end.endDate, H = end.endTimeHours, M = end.endTimeMins;
        let secondsLeft = (D - date) * 24 * 60 * 60 + (H - hour) * 60 * 60 + (M - min) * 60 - sec;
        if (secondsLeft <= 0) {
            this.setState({
                inputError : "Contest is Over"
            })
        }
        else {
        let key = "" + this.state.cellKey;
        let isLocked = 0;
        let user = this.state.user;
        for (let i = 0; i < user.answers.length; i++) {
            if (user.answers[i].index === key) {
                if (user.answers[i].isLock === 1) {
                    isLocked = 1;
                    break;
                }
            } 
        }
        // check if already locked
        if (isLocked) {
            this.setState({
                inputError : "You have already locked"
            })
        }
        else {
            let isAlready = false;
            for (let i = 0; i < user.answers.length; i++) {
                if (user.answers[i].index === key) isAlready = true;
            }
            // check if not submitted before locking
            if (isAlready === false) {
                this.setState({
                    inputError : "First submit before locking"
                })
            }
            else {
                let colorValue = this.state.colorValue;

                for (let i = 0; i < user.answers.length; i++) {
                    if (user.answers[i].index === key) {
                        let today = new Date(), time = {
                            hour : today.getHours(),
                            min : today.getMinutes(),
                            sec : today.getSeconds()
                        }
                        let isDownOrAcross = this.state.cellInfo[key].r, l = this.state.cellInfo[key].l;
                        let j = parseInt( user.answers[i].index, 10)
                        while (l) {
                            console.log(l + " " + j);
                            l--;
                            colorValue[j] = "red";
                            if (isDownOrAcross == 'a') j++;
                            else j += 31;
                        }
                        user.answers[i].isLock = 1;
                        user.answers[i].time = time;
                        break;
                    }
                }
                user.colorValue = colorValue
                fetch(`http://localhost:4000/user/${this.state.id}`, {method : "put",
                body: JSON.stringify(user),
                headers : {
                    "Content-Type" : "application/json"
                }}).then(res => res.json())
                   .then(data => data)
                   .then(() => {
                        this.setState({
                            user : user,
                            inputError : "You answer is locked",
                            colorValue : colorValue
                        })
                   });
            }
        }
        }
    }
    handleGetHint = () => {
        // Fetching hint
        fetch('http://localhost:4000/c3')
        .then(res => res.json())
        .then(data => {
            let hintArray = data.response[0].hints;
            for (let i = 0; i < hintArray.length; i++) {
                if (hintArray[i].index === this.state.cellKey) {
                    this.setState({currentHint : hintArray[i].H});
                }
            }
        })
    }
    avoidSpace = (event) => {
        // Avoid user to use space while typing input
        //console.log(window.event.keyCode);
        let k = event ? event.which : window.event.keyCode;
        if (k == 32) event.preventDefault();
    }

    changeVisibility = () => {
        this.setState({
            isTime : true
        })
    }
    componentDidMount() {
        // Fetching Questions
        let isVisible = [], squareValue = [], colorValue = [];
        for (let i = 0; i < 30 * 31; i++) isVisible.push('hidden');
        for (let i = 0; i < 30 * 31; i++) {
            squareValue.push('#');
            colorValue.push("rgb(46, 14, 231)");
        }
        fetch('http://localhost:4000/c3')
        .then(res => res.json())
        .then(data => {
            this.setState(() => {return {
                start : data.response[0].start, 
                end : data.response[0].end,
                questionArray: data.response[0].questions,
                hintArray : data.response[0].hints
            }});
        });

        fetch(`http://localhost:4000/user/?id=${this.state.id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                squareValue : data.response.gameState,
                isVisible : data.response.isVisible,
                colorValue : data.response.colorValue,
                user : data.response
            }, () => {
                if (this.state.squareValue.length == 0) {
                    this.setState({
                        squareValue : squareValue,
                        isVisible : isVisible,
                        colorValue : colorValue
                    })
                }}
        )})
    }
    Condition = (props) => {
        if (props === false) {
            return (<div className="instructions" style={{visibility:this.state.instructions}}><Instructions/></div>);
        }
        else {
            return (<div className="cross-word" style={{visibility:this.state.crossword}}>
            <CreateMatrix N={this.state.N} M={this.state.M} isSquare={this.state.isSquare} 
                            isQuestionCell={this.state.isQuestionCell}
                            isHintCell={this.state.isHintCell}
                            handleClick={this.handleClick} handleClick2={this.handleClick2}
                            squareValue={this.state.squareValue} 
                            colorValue={this.state.colorValue}
                            questionColor={this.state.questionColor}
                            isVisible={this.state.isVisible} /> 
        </div>);
        }
    }
    render() {
        return (
            <div className="crossword">
                <img src={logo} className="logo-crossword" />
                <h3 className="crossword-present">presents</h3>
                <h1 className="crossword-c3">C3</h1>
                <h1 className="crossword-c32"> = crossword * caption * calculus</h1>
                <div className="timer-main"><Timer  start={this.state.start} end={this.state.end} isTime={this.state.isTime} 
                changeVisibility={this.changeVisibility}/> </div>
                {this.Condition(this.state.isTime)}
                <div>
                    <Rodal1 visible={this.state.visible} hide={this.hide} 
                            error={this.state.inputError}
                            handleOnChange={this.handleOnChange}
                            handleOnSubmit={this.handleOnSubmit}
                            handleOnLock={this.handleOnLock}
                            avoidSpace={this.avoidSpace}
                            currentQuestion={this.state.currentQuestion}
                            currentHint={this.state.currentHint}
                            handleGetHint={this.handleGetHint}
                            rodalHintS={this.state.rodalHint} rodalQuestionS={this.state.rodalQuestion}
                            handleRodalQuestion={this.handleRodalQuestion}
                            handleRodalHint={this.handleRodalHint}
                            change={this.state.change}
                            />
                </div>
                <div>
                    <Rodal2 visible={this.state.visible2} hide={this.hide} 
                            handleGetHint={this.handleGetHint} hint={this.state.currentHint}/>
                </div>
            </div>
        );
    }
}



export default Crossword;