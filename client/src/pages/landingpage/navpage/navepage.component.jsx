import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './navepage.styles.css';
import Nav from '../navbar/nav.component';
import Home from "../homepage/home.component";
import Contact from "../contact/contact.component";
const NavPage = () => (
    <div className = "nav-page">
        <Nav/>
        <div className="container">
            <Route exact={true} path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
        </div>
    </div>
);
export default NavPage;