import React, {Component} from 'react';
import './test.styles.css';

class Test extends Component {
    render() {
        return(
            <div className="google-maps">
                <div className="direction-tirupati-railway">
                    <p>Tirupati Railway Station (TPTY)</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d161818.19139579363!2d79.453283911296!3d13.664964117353625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3a4d4b0f4b9c3937%3A0x221871da12184216!2sTirupati%20Railway%20Station%20(TPTY)%2C%20Tata%20Nagar%2C%20Tirupati%2C%20Andhra%20Pradesh!3m2!1d13.6284008!2d79.4198266!4m5!1s0x3a4d3865679d7dd1%3A0xe393e69267476463!2sIIT%20Tirupati%20Transit%20Campus%2C%20Chindepalle%2C%20Andhra%20Pradesh%20517619!3m2!1d13.707166899999999!2d79.5945816!5e0!3m2!1sen!2sin!4v1578493156421!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe> 
                </div>
                <div className="direction-renigunta-railway">
                    <p>Renigunta Railway Station</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d62027.91918631274!2d79.51610302788468!3d13.673266791983702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3a4d4854a5945bdf%3A0x8ac969bd2ea7c20c!2sRenigunta%20Railway%20Station%20Junction%2C%20Gowri%20Nagar%2C%20Renigunta%2C%20Andhra%20Pradesh!3m2!1d13.6377495!2d79.5062545!4m5!1s0x3a4d3865679d7dd1%3A0xe393e69267476463!2sIIT%20Tirupati%20Transit%20Campus%2C%20Chindepalle%2C%20Andhra%20Pradesh%20517619!3m2!1d13.707166899999999!2d79.5945816!5e0!3m2!1sen!2sin!4v1578493619247!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>              
                </div>
            </div>
        );
    }
}
export default Test;