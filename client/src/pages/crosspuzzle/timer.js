import React, {Component} from 'react';
import './timer.css';
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : "Contest Start In",
            time : {},
            seconds : 10,
            end : {
                endDate : 30,
                endTimeHours : 11,
                endTimeMins : 50
            }
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
        let dE = props.end.endDate, hE = props.end.endTimeHours, mE = props.end.endTimeMins;
        let secondsLeft = (D - date) * 24 * 60 * 60 + (H - hour) * 60 * 60 + (M - min) * 60 - sec;
        let secondsLeftForEnd = ((dE - date) * 24 * 60 * 60 + (hE - hour) * 60 * 60 + (mE - min) * 60 - sec);
        this.setState({end : props.end});
        //console.log(secondsLeft);
        if (secondsLeft >= -1000000000) {
            this.setState({
                seconds : secondsLeft
            });
            this.startCountDown();
        }
        else {
            if (props.isTime !== true) {
                props.changeVisibility();
            }
            if (this.state.status !== "Contest End In") {
                this.setState({
                    status : "Contest End In"
                });
            }
            this.timer = 0;
            this.setState({
                seconds : secondsLeftForEnd
            })
            this.startCountDown()
        }
    }
    uselessFunc = () => {
        this.props.changeVisibility();
    }
    startCountDown = () => {
        //console.log(this.state.seconds);
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown = () => {
       let secs = this.state.seconds - 1;
       //console.log(secs);
       this.setState({
           time : this.secondsToTime(secs),
           seconds : secs
       });
       if (secs <= 0) {
           this.setState({
               time : {}
           });
            clearInterval(this.timer);
            let today = new Date();
            let date = today.getDate(), hour = today.getHours(), min = today.getMinutes(), sec = today.getSeconds();
            let end = this.state.end;
            let dE = end.endDate, hE = end.endTimeHours, mE = end.endTimeMins;
            let secondsLeftForEnd = ((dE - date) * 24 * 60 * 60 + (hE - hour) * 60 * 60 + (mE - min) * 60 - sec);
            this.timer = 0;
            this.props.changeVisibility();
            this.timer = 0;
            this.setState({
                status : "Contest Ends In",
                seconds : secondsLeftForEnd
            })
            this.startCountDown()
        }
    }
    startCountDown2 = () => {
        this.props.changeVisibility();
        console.log(this.state.seconds);
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown2, 1000);
        }
    }
    countDown2 = () => {
        let secs = this.state.seconds - 1;
        console.log(this.state.seconds - 1);
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
            {UI(this.state.time, this.state.status)}
        </div>
        );
    }
}


function UI (params, status) {
    let ui = [];
    
if (params.s || params.m) ui.push(<h2>{status}</h2>)
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