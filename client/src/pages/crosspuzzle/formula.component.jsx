import React from 'react';
import { Node, Context } from 'react-mathjax';
function Formula(props) {
    return (
      <Context input="tex">
        <Node inline>{props.tex}</Node>
      </Context>
    );
}
export default Formula;