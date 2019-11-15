import React from 'react';
import {Company} from './company.component';
import './companylist.styles.css';
export const CompanyList = (props) => {
    const filteredCompanies = props.companies.filter(company => company.category.includes(props.category));
    return (
        <div className = "company-list">
            {filteredCompanies.map(company => (<Company src = {company.src} name = {company.name}/>))}
        </div>
    );
}
/*{
    //filteredCompanies = props.companies.filter(company => company.category.toSring() == '1')
}*/