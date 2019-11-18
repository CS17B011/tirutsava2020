import React from 'react';
import './nav.styles.css';
import {NavLink, Link} from 'react-router-dom';
import logo from "../../sponsers/logo.jpeg";

const toggleMenuClasses = () => {
    let hamburgerIcon = document.getElementById('burger');
    hamburgerIcon.classList.toggle('is-active');
    let mobileMenu = document.getElementById('menu-container');
    mobileMenu.classList.toggle('opened');
} 

const Nav = () => {
    return (
        <div>
            <div className="burger" id="burger" onClick={toggleMenuClasses}>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className = "menu-container" id="menu-container">
            <img src = {logo} className = "logo"/>
                <header className = "list-menu">
                    
                    <NavLink className = "items" activeClassName="active" to="/">
                        Home
                    </NavLink>
                    <NavLink className = "items" activeClassName="active" to="/events">
                        Events
                    </NavLink>
                    <NavLink className = "items" activeClassName="active" to="/proshows">
                        ProShows
                    </NavLink>
                    <NavLink className = "items" activeClassName="active" to="/workshops">
                        Workshops
                    </NavLink>
                    <NavLink className = "items" activeClassName="active" to="/sponsers">
                        Sponsers 
                    </NavLink>
                    <NavLink className = "items" activeClassName="active" to="/contactus">
                        ContactUs
                    </NavLink>
                    <NavLink className = "items" activeClassName="active" to="/login">
                        Login
                    </NavLink>
                </header>
            </div>
        </div>
    )
}


export default Nav;