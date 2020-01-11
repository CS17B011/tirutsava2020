import React from 'react';
import './questions.styles.css';
function Questions(props) {
    let questions = [];
    if (props.questions.length)
    questions.push(<div className="question-h">Questions</div>)
    for (let i = 0; i < props.questions.length; i++) {
        questions.push(<h3 className="question">{i + 1}. {props.questions[i]}</h3>);
    }
    return(
        questions
    );
}

export default Questions;