import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './pages/sponsers/sponsers.component';
import * as serviceWorker from './serviceWorker';
import Sponsers from './pages/sponsers/sponsers.component';
import CrossPuzzle from './pages/crosspuzzle/crossmain.component';

ReactDOM.render(<CrossPuzzle/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
