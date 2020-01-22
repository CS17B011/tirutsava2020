import React, {Component} from 'react';
import Rodal from "rodal";
import "rodal/lib/rodal.css";

export default function Rodal1(props) {
  return (
    <Rodal visible={props.visible} onClose={props.hide} animation="rotate"
        customStyles={{
            background: "black",
            opacity: "0.8"
        }}
    >
      <div>
        <h3>{props.hint}</h3>
        <button className="crossword-gethint" onClick={() => props.handleGetHint()}>GET HINT</button>
      </div>
    </Rodal>
  );
}