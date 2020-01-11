import React,{Fragment} from 'react';
import './crossmain.styles.css';
import  CreateMatrix  from './createMatrix';
import { Node, Context } from 'react-mathjax2';
import Questions from './questions.component'; 
import Timer from './timer';
// npm i react-mathjax --save
//import {Formula} from './formula.component';

class CrossPuzzle extends React.Component {
    constructor(props) {
        super(props);
        // $${{ - b \pm \sqrt {{b^2} - 4ac}} \over {2a}}$$
        this.state = {
            N : 29,            // static
            M : 31,            // static
            isSquare : "00000000001000000000000000000000000000000100000000000000000000000000000010000000000000000000000000000001000000000000000000000000000000100000000000000000000000000001010000000000000000000000000000101001000000000000000000000000010100110000000000000000000000111111111110000000000000000000000101000100000000000000001111111111000011111111000000000000000001000001000100000000000000000000100000100010000000000000111111110000010001000000000000000000001000001000100000000000000011111111100100010000000000000000000010000001000000000000000000000011111111100000000000000000000000100000010000000000000000000000000000001000000000000000000000000000000100000000000000000000000000111111111111111111110000000000000001000000000000000000000000000000100000000000000000000000000000010000000000000000000000000000001000000000000000000000001111111111111110000000000000000000000010000000000000000000000000000001000000000000000", // 1000101111111010101011111010001010000 static
            isFill :  "0000000000000000000000000000000000000",






            dynamicMatrix : [],
            errorMessage : "",
            getHint : ["hello"],
            isGetHint : Array(36).fill(0),
            hints : Array(36).fill(Formula("\\huge\\int_{a}^{b} x^2cos(sin(x)) dx")),
            newAnswer : "",
            squareValue : Array(29 * 31).fill('#'),
            dynamicMatrixValue : Array(36).fill(1),
            questions : [],
            isSubmit : false,
            id : "5e0dea395b95d331e05d7283",
            user : {                                    // user object for updating user
                crossPuzzleId : 1,
                gameState : "",
                hintTaken : "",
                isSubmit : false,
                timeTaken : 4
            }
        };
        this.handleClick = this.handleClick.bind(this);   // for selecting piece of matrix 
        this.handleChange = this.handleChange.bind(this); // for user input
        this.handleCellClick = this.handleCellClick.bind(this); // for getting hint on selected cell
    }

    handleChange(input, req, type, i, j) {
        if (input.length != req) {
            this.setState({
                errorMessage : "Input Length must be " + req,
                newAnswer : ""
            })
        }
        else {
            this.setState({
                errorMessage : "",
                newAnswer : input
            })
        }
    }

    setNewAnswer(req, type, i, j) {
        let input = this.state.newAnswer
        if (input.length != req) {
            this.setState({
                errorMessage : "Input Length must be " + req
            })
        }
        else {
            let userBody = this.state.user;
            if (!type) {
                let temValue = this.state.squareValue
                let temFill = this.state.isFill
                for (let k = i; k < i + req; k++) {
                    temValue[this.state.M * k + j] = input[k - i];
                    let index = this.state.M * k + j
                    temFill = temFill.substr(0, index) + '1'+ temFill.substr(index + 1);
                }
                
                this.setState({
                    squareValue : temValue,
                    isFill : temFill
                })
                userBody.gameState = this.state.squareValue
            }
            else {
                let temValue = this.state.squareValue
                let temFill = this.state.isFill
                for (let k = i; k < i + req; k++) {
                    temValue[j * this.state.M + k] = input[k - i];
                    let index = j * this.state.M + k;
                    temFill = temFill.substr(0, index) + '1'+ temFill.substr(index + 1);
                }
                
                this.setState({
                    squareValue : temValue,
                    isFill : temFill
                })
                userBody.gameState = this.state.squareValue
            }
            fetch(`http://localhost:4000/user/${this.state.id}`,               // updating user data
                    {method : "put",
                     body: JSON.stringify(userBody),
                     headers : {
                         "Content-Type" : "application/json"
                     }}).then(res => res.json())
                        .then(data => data);
        }
    }

    getHintHandleChange(cellNo) {
        let newgetHint = [], newIsGetHint = [];
        newgetHint.push(this.state.hints[cellNo])
        newIsGetHint = this.state.isGetHint;
        newIsGetHint[cellNo] = 1;
        this.setState({
            getHint : newgetHint,
            isGetHint : newIsGetHint
        })
    } 

    handleCellClick(cellNo) {
        let newgetHint = []
        if (!this.state.isGetHint[cellNo]) {
            newgetHint.push(<button onClick = {() => this.getHintHandleChange(cellNo)}>Click to get hint</button>)
        }
        else {
            newgetHint.push(this.state.hints[cellNo])
        }
        this.setState({
            getHint : newgetHint
        })
    }

    handleClick(i, j) {
        const N = this.state.N, M = this.state.M;
        const a = i * M + j - 1, b = i * M + j + 1;
        const c = (i - 1) * M + j, d = (i + 1) * M  + j;
        let s = this.state.isSquare, isFill = this.state.isFill;
        if (
            (((j - 1 >= 0 && s[a] === '0') || (j - 1 == -1)) && ((j + 1 < M && s[b] === '0') || (j + 1 == M))) || 
            ((((j - 1 >= 0 && s[a] !== '0' && isFill[a] !== '0') || (j + 1 < M && s[b] !== '0' && isFill[b] !== '0')) &&
            !((i - 1 >= 0 && s[c] !== '0' && isFill[c] !== '0') ||
            (i + 1 < N && s[d] != '0' && isFill[d] !== '0'))
            ) && !(s[c] === '0' && s[d] === '0'))
        ) {
            let q = i - 1, w = i + 1;
            while (q >= 0 && s[q * M + j] === '1') {
                q--;
                console.log(q);
            }
            while (w < N && s[w * M + j] === '1') w++;
            q++;
            w--;
            let n = [];
            for (let itr = q; itr <= w; itr++) {
                n.push(<div><button className = "square-visible-2" onClick = {() => this.handleCellClick(itr * M + j)}>{this.state.squareValue[itr * M + j]}</button></div>)
            }
            n.push(<div className = "input-box" ><input 
                                type="text"
                                onChange = {e => this.handleChange(e.target.value, w - q + 1, 0, q, j)}/></div>)
            n.push(<div className = "submit-button"><button onClick = {() => this.setNewAnswer(w - q + 1, 0, q, j)}>submit</button></div>)
            this.setState({
                dynamicMatrix : n
            });
        }
        else {
            let q = j - 1, w = j + 1;
            //console.log(q);
            while (q >= 0 && s[i * M + q] === '1') q--;
            while (w < M && s[i * M + w] === '1') w++;
            q++;
            w--;
            let n = [];
            for (let itr = q; itr <= w; itr++) {
                n.push(<button className = "square-visible-2" onClick = {() => this.handleCellClick(i * M + itr)}>{this.state.squareValue[i * M + itr]}</button>)
            }
            n.push(<div className = "input-box" ><input 
                                type="text" 
                                onChange = {e => this.handleChange(e.target.value, w - q + 1, 1, q, i)}/></div>)
            n.push(<div className = "submit-button"><button onClick = {() => this.setNewAnswer(w - q + 1, 1, q, i)}>submit</button></div>)
            this.setState({
                dynamicMatrix : n
            });
        }
    }
    
    componentDidMount() {
        /*console.log("working");
        fetch(`http://localhost:4000/user/?id=${this.state.id}`)
            .then(res => res.json())
            .then(data => this.setState({
                isSubmit : data.response.isSubmit,
                squareValue : data.response.gameState}))
            .then( () => {
                        fetch('http://localhost:4000/c3')
                            .then(res => res.json())
                            .then(data => this.setState({
                                questions : data.response[0].questions,
                                isSquare : data.response[0].binaryArray}))
                            .then(() => {
                                if (this.state.isSubmit) {
                                    let str = "";
                                    for (let i = 0; i < this.state.N * this.state.M; i++) str += "0";
                                    this.setState({
                                        isSquare : str,
                                        questions : []
                                    });
                                }
                            })
                    })*/
    }


    render() {
        return (
            <div className = "main">
                <div className="tim">
                   
                </div>
                <div className="tem">
                    <div className = "cross-matrix">
                        
                        <CreateMatrix N={this.state.N} M={this.state.M} isSquare={this.state.isSquare} 
                                        handleClick={this.handleClick} squareValue={this.state.squareValue} /> 
                        <div className="questions-c"><Questions questions={this.state.questions} /></div>
                    </div>
                    
                    {/*<div className = "get-hint-box">
                        <div className = "dynamic-matrix">
                            {this.state.dynamicMatrix}
                        </div>
                        <div style ={{marginLeft : 200, marginTop : 150}}>{this.state.getHint}</div>
                        <div>
                            <output>{this.state.errorMessage}</output>
                        </div>
        </div>*/}
                </div>
            </div>
        );
    }
}





function Formula(props) {
    let tem = [];
    tem.push(<Context input="tex"><Node inline >{props}</Node></Context>)
    //<Context input="tex"><Node inline>{props}</Node></Context>
    return tem;
}

export default CrossPuzzle;