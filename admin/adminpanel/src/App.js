import React,{Fragment} from 'react';
import Layout from './Components/Layout/layout';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import User from './Components/User/user.js';
import Question from './Components/Questions/questions.js';
import Sponser from './Components/Sponsers/sponsers.js';
import Event from './Components/Events/events.js';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
    <div>
      <Layout />
    </div>
      <div style = {{display:"flex",justifyContent:"center"}}>
           <Route path = "/Users" exact component = {User}></Route>
           <Route path = "/Questions" exact component = {Question}></Route>
           <Route path = "/Sponsers" exact component = {Sponser}></Route>
           <Route path = "/Events" exact component = {Event}></Route>
           <Route path = "/"  exact component = {Event}></Route>
         </div>
         <div>
         </div>
       </Fragment>
     </BrowserRouter>
  );
}

export default App;
