import React,{Fragment} from 'react';
import './crossmain.styles.css';
import { Node, Context } from 'react-mathjax2';
// npm i react-mathjax --save
//import {Formula} from './formula.component';
class CrossPuzzle extends React.Component {
    constructor(props) {
        super(props);
        // $${{ - b \pm \sqrt {{b^2} - 4ac}} \over {2a}}$$
        this.state = {
            N : 6,
            M : 6,
            isSquare : "1000101111111010101011111010001010000",
            isFill :   "0000000000000000000000000000000000000",
            dynamicMatrix : [],
            errorMessage : "",
            getHint : ["hello"],
            isGetHint : Array(36).fill(0),
            hints : Array(36).fill(Formula("\\huge\\int_{a}^{b} x^2cos(sin(x)) dx")),
            newAnswer : "",
            squareValue : Array(36).fill('#'),
            dynamicMatrixValue : Array(36).fill(1)    
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
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
            /*if (!type) {
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
                console.log(temFill);
            }*/
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
            }
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
    
    
    render() {
        return (
            <div className = "main">
                <div className = "cross-matrix">
                    { createMatrix(this.state.N, this.state.M, this.state.isSquare, this.handleClick, this.state.squareValue) }
                </div>
                <div className = "get-hint-box">
                    <div className = "dynamic-matrix">
                        {this.state.dynamicMatrix}
                    </div>
                    <div style ={{marginLeft : 200, marginTop : 150}}>{this.state.getHint}</div>
                    <div>
                        <output>{this.state.errorMessage}</output>
                    </div>
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
function createMatrix(N, M, s, handleClick, value) {
    let matrix = []
    for (let i = 0; i < N; i++) {
        let child = []
        for (let j = 0; j < M; j++) {
            const idx = i * M + j;
            if (s[idx] == '0') child.push(<button className = "square-invisible">j</button>);
            else child.push(<button className = "square-visible"
                                    onClick = {() => handleClick(i, j)}>{value[idx]}</button>);
        }
        matrix.push(<div>{child}</div>);
    }
    return matrix;
}

export default CrossPuzzle;