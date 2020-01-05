import React from "react";
import "./EventsPage.css";
import tech_vid from "./tech-back-vid.mp4";
import cult_vid from "./cult-back-vid.mov";
import online_vid from "./online-back-vid.mp4";
const EventSlider = () => {
  return (
    <div className="events-page scrollmenu ">
      <div
        className="category-link one"
        onClick={() => {
          //history.push(match.url + "/technical");
        }}
      >
        {/*<video className="video" ref="vidRef" autoPlay loop muted>
          <source src={tech_vid} type="video/mp4" />
        </video>*/
        /*onMouseEnter={() => {
          this.refs.vidRef.pause();
        }}*/}

        <video className="video" autoPlay loop muted>
          <source src={tech_vid} type="video/mp4" />
        </video>
        <div className="video-text">
          <a className="link link--kukuri" href="#" data-letters="TECHNICAL">
            TECHNICAL
          </a>
        </div>
      </div>
      <div
        className="category-link two"
        onClick={() => {
          // history.push(match.url + "/cultural");
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
        className="category-link three"
        onClick={() => {
          //history.push(match.url + "/online");
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

      <div
        className="category-link two"
        onClick={() => {
          // history.push(match.url + "/cultural");
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
        className="category-link three"
        onClick={() => {
          //history.push(match.url + "/online");
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

      <div
        className="category-link two"
        onClick={() => {
          // history.push(match.url + "/cultural");
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
    </div>
  );
};

export default EventSlider;
