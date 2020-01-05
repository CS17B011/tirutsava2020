import React from "react";
import tech_vid from "./tech-back-vid.mp4";
import cult_vid from "./cult-back-vid.mov";
import online_vid from "./online-back-vid.mp4";
import "./Events.css";
class Events extends React.Component {
  componentDidMount() {
    document.getElementById("left-btn").onclick = function() {
      scrollLeft(
        document.getElementById("main-slider"),
        -0.6 * window.innerWidth,
        1000
      );
    };

    document.getElementById("right-btn").onclick = function() {
      scrollLeft(
        document.getElementById("main-slider"),
        0.6 * window.innerWidth,
        1000
      );
    };

    function scrollLeft(element, change, duration) {
      var start = element.scrollLeft,
        currentTime = 0,
        increment = 20;

      console.log(start);

      var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  }

  render() {
    const { history, match } = this.props;
    return (
      <div id="main-slider">
        <div id="left-btn">
          <i class="fa fa-arrow-left fa-lg icon" aria-hidden="true"></i>
        </div>
        <div id="right-btn">
          <i class="fa fa-arrow-right fa-lg icon" aria-hidden="true"></i>
        </div>
        <div
          className="slider-child child1"
          onClick={() => {
            history.push(match.url + "/technical");
          }}
        >
          <video className="video" autoPlay loop muted>
            <source src={tech_vid} type="video/mp4" />
          </video>
          <div className="video-text">
            <a className="link link--kukuri" data-letters="TECHNICAL">
              TECHNICAL
            </a>
          </div>
        </div>
        <div
          className="slider-child child2"
          onClick={() => {
            history.push(match.url + "/cultural");
          }}
        >
          <video className="video" autoPlay loop muted>
            <source src={cult_vid} type="video/mp4" />
          </video>
          <div className="video-text">
            <a class="link link--kukuri" href="#" data-letters="CULTURAL">
              CULTURAL
            </a>
          </div>
        </div>
        <div
          className="slider-child child3"
          onClick={() => {
            history.push(match.url + "/online");
          }}
        >
          <video className="video" autoPlay loop muted>
            <source src={online_vid} type="video/mp4" />
          </video>
          <div className="video-text">
            <a class="link link--kukuri" href="#" data-letters="ONLINE">
              ONLINE
            </a>
          </div>
        </div>
        <div className="slider-child child4">
          <video className="video" autoPlay loop muted>
            <source src={tech_vid} type="video/mp4" />
          </video>
          <div className="video-text">
            <a className="link link--kukuri" data-letters="PREFEST">
              PREFEST
            </a>
          </div>
        </div>
        <div className="slider-child child5">
          <video className="video" autoPlay loop muted>
            <source src={cult_vid} type="video/mp4" />
          </video>
          <div className="video-text">
            <a class="link link--kukuri" href="#" data-letters="WORKSHOPS">
              WORKSHOPS
            </a>
          </div>
        </div>
        <div className="slider-child child6">
          <video className="video" autoPlay loop muted>
            <source src={online_vid} type="video/mp4" />
          </video>
          <div className="video-text">
            <a class="link link--kukuri" href="#" data-letters="INFORMALS">
              INFORMALS
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
