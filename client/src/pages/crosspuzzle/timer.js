import React, {Component} from 'react';
import './timer.css';
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : {},
            seconds : 10
        };
        this.timer  = 0;
    }
    
    secondsToTime = (secs) => {
        let days = Math.floor(secs / (24 * 60 * 60));
        let divisor_for_hours = secs % (24 * 60 * 60);
        let hours = Math.floor(divisor_for_hours / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "d" : days,
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
   }

    componentWillReceiveProps(props) {
        let today = new Date();
        let date = today.getDate(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
        let D = props.start.startDate, H = props.start.startTimeHours, M = props.start.startTimeMins;
        let secondsLeft = (D - date) * 24 * 60 * 60 + (H - hour) * 60 * 60 + (M - min) * 60 - sec;
        console.log(secondsLeft);
        this.setState({
            seconds : secondsLeft
        });
        this.startCountDown();
    }
    uselessFunc = () => {
        this.props.changeVisibility();
    }
    startCountDown = () => {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown = () => {
       let secs = this.state.seconds - 1;
       this.setState({
           time : this.secondsToTime(secs),
           seconds : secs
       });
       if (secs <= 0) {
           this.setState({
               time : {}
           });
            this.props.changeVisibility();
            clearInterval(this.timer);
        }
    }
    render() {
        return(
        <div>
            {UI(this.state.time)}
        </div>
        );
    }
}


function UI (params) {
    let ui = [];
    
    if (params.s || params.m) ui.push(<h2>Contest Starts In</h2>)
    if (params.d) {
        ui.push(<div className="timer"><h3 className="name">Days</h3><button className="time">{params.d}</button></div>)
    }
    if (params.h) {
        ui.push(<div className="timer"><h3 className="name">Hrs</h3><button className="time">{params.h}</button></div>)
    }
    if (params.m) {
        ui.push(<div className="timer"><h3 className="name">Min</h3><button className="time">{params.m}</button></div>)
    }
    if (params.s) {
        ui.push(<div className="timer"><h3 className="name">Sec</h3><button className="time">{params.s}</button></div>)
    }
    return ui;
}

export default Timer;