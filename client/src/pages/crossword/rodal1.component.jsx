import React, { Component } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

export default function Rodal1(props) {

  function change(value) {
    if (value == true) {
      return (<div className="rodal-question" style={{visibility:props.rodalQuestionS.visibility}}>
      <div className="crossword-question"><p>{props.currentQuestion}</p></div>
      <input onChange={e => props.handleOnChange(e.target.value)} type="text" className="crossword-input" onKeyPress={(e) => props.avoidSpace(e)}/>
      <button className="crossword-input-submit" onClick={() => props.handleOnSubmit()}>SUBMIT</button>
      <div><button className="crossword-input-lock" onClick={() => props.handleOnLock()}> LOCK</button></div>
      <h4>{props.error}</h4>
    </div>);
    }
    else {
      return (<div className="rodal-hint" style={{visibility:props.rodalHintS.visibility}}>
      <h3>{props.currentHint}</h3>
      {/*<button className="crossword-gethint" onClick={() => props.handleGetHint()}>GET HINT</button>*/}
    </div>);
    }
  }
  return (
    <Rodal visible={props.visible} onClose={props.hide} animation="rotate"
        customStyles={{
            background: "black",
            opacity: "0.7",
            width: 450,
            height : 300
        }}
    > 
      <div>
        <button className="rodal-question-btn" onClick={() => props.handleRodalQuestion()}
        style={{opacity:props.rodalQuestionS.opacity}}>Question</button>
        <button className="rodal-hint-btn" onClick={() => props.handleRodalHint()}
        style={{opacity:props.rodalHintS.opacity}}>Hint</button>
      </div>
      {change(props.change)}
      {/*<div className="rodal-question" style={{visibility:props.rodalQuestionS.visibility}}>
        <div className="crossword-question"><p>{props.currentQuestion}</p></div>
        <input onChange={e => props.handleOnChange(e.target.value)} type="text" className="crossword-input" onKeyPress={(e) => props.avoidSpace(e)}/>
        <button className="crossword-input-submit" onClick={() => props.handleOnSubmit()}>SUBMIT</button>
        <div><button className="crossword-input-lock" onClick={() => props.handleOnLock()}> LOCK</button></div>
        <h4>{props.error}</h4>
      </div>
      <div className="rodal-hint" style={{visibility:props.rodalHintS.visibility}}>
        <h3>{props.hint}</h3>
        <button className="crossword-gethint" onClick={() => props.handleGetHint()}>GET HINT</button>
      </div>*/ }
    </Rodal>
  );
}
