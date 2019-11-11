import React,{Component, Fragment} from 'react';
import logo from './logo.jpeg';
import sbi from './sbi.png';
import vivo from './vivo.png';
import gshock from './gshock.png';
import bisleri from './bisleri.png';
import facebook from './facebooklogo.png';
import instagram from './instagramlogo.png';
import youtube from './youtubelogo.png';
import twitter from './twitterlogo.png';
import linkedin from './linkedinlogo.png';
import './sponsers.styles.css';
import {Company} from './company.component';
import {CompanyList} from './companylist.component';

class Sponsers extends Component {
    constructor(props) {
        super(props);
        // sample data
        this.state = {
            companies : [
                {
                    src : vivo,
                    name : "company name",
                    category : '1'
                },
                {
                    src : gshock,
                    name : "company name",
                    category : '2'
                },
                {
                    src : bisleri,
                    name : "company name",
                    category : '2'
                },
                {
                    src : bisleri,
                    name : "company name",
                    category : '1'
                },
                {
                    src : sbi,
                    name : "company name",
                    category : '2'
                },
                {
                    src : bisleri,
                    name : "company name",
                    category : '1'
                }
            ]
        };
    }
    render() {
        return (
            <div className = "sponsers">
                <div className="top">
                    <h2 className = "presentedby"> Presented By</h2>
                    <img className = "presentedby-logo" src = {vivo} />
                    <img src={logo} className = "logo"/>
                    <div style = {{display : 'flex'}}>
                        <div>
                            <h2 className = "poweredby"> Powered By</h2>
                            <img className = "poweredby-logo" src = {sbi} />
                        </div>
                        <div style = {{marginLeft : '150px'}}>
                            <h2 className = "inassociationwith"> In Association with</h2>
                            <img className = "inassociationwith-logo" src = {gshock} />
                        </div>
                    </div>              
                </div>
                <div className="bottom">
                    <h1 className = "company-category"> EVENT PARTNERS </h1>
                    <CompanyList companies = {this.state.companies} category = '1'/>
                    <h1 className = "company-category"> FOOD PARTNERS </h1>
                    <CompanyList companies = {this.state.companies} category = '2'/>
                </div>
                <div className="footer">
                    <img src={facebook} style = {{marginLeft : 530}}className = "social-media"/>
                    <img src={youtube} className = "social-media"/>
                    <img src={instagram} className = "social-media"/>
                    <img src={linkedin} className = "social-media"/>
                    <img src={twitter} className = "social-media"/>
                </div>
            </div>
        );
    }
}
function Name(props) {
    return (
        <div style = {{color : "black"}}>
            <h2>{props.name}</h2>
        </div>
    );
}
export default Sponsers;