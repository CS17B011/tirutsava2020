import React from 'react';

function CreateMatrix(props) {
    let matrix = []
    let N = props.N, M = props.M, s = props.isSquare;
    let handleClick = props.handleClick, handleClick2 = props.handleClick2, value = props.squareValue;
    let isQuestionCell = props.isQuestionCell;
    let isHintCell = props.isHintCell;
    let color = props.colorValue;
    let questionColor = props.questionColor;
    for (let i = 0; i < N; i++) {
        let child = []
        for (let j = 0; j < M; j++) {
            const idx = i * M + j;
            if (s[idx] == '0') child.push(<button className = "square-invisible"><h3 className="crossword-Q">Q</h3>
                                                                                 <h3 className="crossword-H">H</h3>
                                                                                <h3 className="crossword-value">j</h3>
                                                                                </button>);
            else {
                if (isQuestionCell[idx] !=='0' && isHintCell[idx] !=='0')
                child.push(<button className = "square-visible"
                                    onClick = {() => handleClick(idx)}>
                                        <h3 className="crossword-Q" style={{color : questionColor[idx]}}>Q</h3>
                                        <h3 className="crossword-H" >H</h3>
                                        <h3 className="crossword-value" style={{visibility : props.isVisible[idx], color : color[idx]}}>{value[idx]}</h3>
                                        </button>);
                else if (isQuestionCell[idx] !=='0' && isHintCell[idx] ==='0')
                child.push(<button className = "square-visible"
                                   ><h3 className="crossword-Q" style={{color : questionColor[idx]}}>Q</h3>
                                    <h3 className="crossword-HD">H</h3>
                                    <h3 className="crossword-value" style={{visibility : props.isVisible[idx], color : color[idx]}}>{value[idx]}</h3>
                                    </button>);
                else if (isQuestionCell[idx] ==='0' && isHintCell[idx] !=='0')
                child.push(<button className = "square-visible"
                                    onClick = {() => handleClick2(idx)}>
                                        <h3 className="crossword-QD" style={{color : questionColor[idx]}}>Q</h3>
                                        <h3 className="crossword-H">H</h3>
                                        <h3 className="crossword-value" style={{visibility : props.isVisible[idx], color : color[idx]}}>{value[idx]}</h3>
                                                                        </button>);
                else 
                child.push(<button className = "square-visible"
                                   ><h3 className="crossword-QD" style={{color : questionColor[idx]}}>Q</h3>
                                    <h3 className="crossword-HD">H</h3>
                                    <h3 className="crossword-value" style={{visibility : props.isVisible[idx], color : color[idx]}}>{value[idx]}</h3>
                                    </button>);
            }
        }
        matrix.push(<div className="crossword-matrix">{child}</div>);
    }
    return (
        matrix
    );
}

export default CreateMatrix;