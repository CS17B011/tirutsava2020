import React from 'react';
import './company.styles.css';
export const Company = (props) => (
    
    <div className = 'company-card'>
        <img className = "company-logo" src = {`${props.src}`}/>
        <h3 className = "company-name">{props.name}</h3>
    </div>
);