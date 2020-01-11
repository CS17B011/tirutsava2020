import React, {Component} from 'react';
import './crossword.styles.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import logo from '../sponsers/logo.jpeg';
import CreateMatrix from '../crosspuzzle/createMatrix';
import Rodal1 from './rodal1.component';
import Rodal2 from './rodal2.component';
class Crossword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // defining C3
            N : 29,
            M : 31,
            isSquare : "00000000001000000000000000000000000000000100000000000000000000000000000010000000000000000000000000000001000000000000000000000000000000100000000000000000000000000001010000000000000000000000000000101001000000000000000000000000010100110000000000000000000000111111111110000000000000000000000101000100000000000000001111111111000011111111000000000000000001000001000100000000000000000000100000100010000000000000111111110000010001000000000000000000001000001000100000000000000011111111100100010000000000000000000010000001000000000000000000000011111111100000000000000000000000100000010000000000000000000000000000001000000000000000000000000000000100000000000000000000000000111111111111111111110000000000000001000000000000000000000000000000100000000000000000000000000000010000000000000000000000000000001000000000000000000000001111111111111110000000000000000000000010000000000000000000000000000001000000000000000", // 1000101111111010101011111010001010000 static
            isQuestionCell: "00000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000001000000000000000000000000000000010000000000000000000000100000000000000000000000000000000000000000000000000000001000000000000010001000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000001000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            isHintCell : "00000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000001000000000000000000000000000000110000000000000000000000100010000000000000000000000000000000000000000000000000001100000000000010001000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000010000100000000010000000000000000000000000001000000000000000000000010000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            cellInfo : {
                "10" : {r : 'd', l : 10},
                "163" : {r : 'd', l : 14},
                "199" : {r : 'd', l : 3},
                "231" : {r : 'd', l : 9},
                "328" : {r : 'd', l : 6},
                "511" : {r : 'd', l : 13},
                "254" : {r : 'a', l : 11},
                "310" : {r : 'a', l : 10},
                "324" : {r : 'a', l : 8},
                "404" : {r : 'a', l : 8},
                "468" : {r : 'a', l : 9},
                "534" : {r : 'a', l : 9},
                "662" : {r : 'a', l : 20},
                "845" : {r : 'a', l : 15}
            },
            // game variables
            questionArray: [],
            hintArray : [],
            squareValue : Array(29 * 31).fill('#'),
            isVisible : Array(29 * 31).fill("hidden"),
            visible: false,
            visible2: false,
            cellKey : 0,
            inputError : "",
            currentQuestion : "",
            currentAnswer : "",
            currentHint : "",
            // Rodal variable
            rodalQuestion : {
                visibility : "visible",
                opacity : "1"},
            rodalHint : {
                visibility : "hidden",
                opacity : "0.7"},
            // user variable
            user : {
                gameState : [],
                hintTaken : Array(29 * 31).fill(0),
                isSubmit : false,
                timeTaken : 0
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
            opacity : "0.7"}});
    }
    handleRodalHint = () => {
        this.setState({rodalQuestion:{
            visibility : "hidden",
            opacity : "0.7"}, 
            rodalHint:{
            visibility : "visible",
            opacity : "1"}});
    }
    handleClick = (key) => {
        this.setState({ visible: true, cellKey : key});
        let questionArray = this.state.questionArray;
        for (let i = 0; i < questionArray.length; i++) {
            console.log(questionArray[i].index);
            if (questionArray[i].index == key) {
                this.setState({
                    currentQuestion : questionArray[i].Q
                });
                break;
            }
        }
    }

    handleClick2 = (key) => {
        this.setState({ visible2: true, cellKey : key});
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
        console.log(this.state.cellInfo[key]);
        if (input.length !== this.state.cellInfo[key].l) {
            this.setState({inputError : `Input Length Must Be ${this.state.cellInfo[key].l}`});
        }
        else {
            this.setState({inputError : ""});
            let squareValue = [], isVisible = [];
            for (let i = 0; i < 29 * 31; i++) {
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
            this.setState({
                squareValue : squareValue,
                isVisible : isVisible
            });
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
        console.log(window.event.keyCode);
        let k = event ? event.which : window.event.keyCode;
        if (k == 32) event.preventDefault();
    }

    componentDidMount() {
        // Fetching Questions
        fetch('http://localhost:4000/c3')
        .then(res => res.json())
        .then(data => this.setState({
            questionArray: data.response[0].questions}))
    }

    render() {
        return (
            <div className="crossword">
                <img src={logo} className="logo-crossword" />
                <h3 className="crossword-present">presents</h3>
                <h1 className="crossword-c3">C3</h1>
                <h1 className="crossword-c32"> = crossword * caption * calculus</h1>
                <div className="cross-word">
                    <CreateMatrix N={this.state.N} M={this.state.M} isSquare={this.state.isSquare} 
                                    isQuestionCell={this.state.isQuestionCell}
                                    isHintCell={this.state.isHintCell}
                                    handleClick={this.handleClick} handleClick2={this.handleClick2}
                                    squareValue={this.state.squareValue} 
                                    isVisible={this.state.isVisible} /> 
                </div>
                <div>
                    <Rodal1 visible={this.state.visible} hide={this.hide} 
                            error={this.state.inputError}
                            handleOnChange={this.handleOnChange}
                            handleOnSubmit={this.handleOnSubmit}
                            avoidSpace={this.avoidSpace}
                            currentQuestion={this.state.currentQuestion}
                            handleGetHint={this.handleGetHint} hint={this.state.currentHint}
                            rodalHintS={this.state.rodalHint} rodalQuestionS={this.state.rodalQuestion}
                            handleRodalQuestion={this.handleRodalQuestion}
                            handleRodalHint={this.handleRodalHint}/>
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