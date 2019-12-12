import React from "react";
import "./AboutUs.css";
import AboutBack from "./about_background.png";
import AboutLogo from "./about_logo.png";
import YouTube from "react-youtube";

import CountUp from "react-countup";

const AboutUs = () => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  // const onReady = event => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };
  return (
    <div
      className="about-us"
      // style={{ backgroundImage: "url(" + AboutBack + ")" , "url(" + AboutLogo + ")"}}
    >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="main-title">about us</div>
      </div>
      <div className="about-body">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="youtube-vid">
            <div className="after-movie">AFTER MOVIE</div>
            <YouTube videoId="5pMlg62VbMs" opts={opts} />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="about-text">
            Tirutsava is a conflation between technology and culture. The name
            is derived from a fusion of the words ,"Tiru" , from Tirupati , the
            city which houses our esteemed institute and "Utsava" which
            literally translates to "festival". Tirutsava aims to celebrate
            tradition and technology, not as two incompatible, self-reliant
            fields , but as complementary concepts furthering societal
            development. With this intent , we bring forth the "Tirutsava" in
            Tirupati.
          </div>
        </div>
      </div>
      <div className="about-footer">
        <div>
          FOOTFALLS
          <div>
            <CountUp className="counter" end={100} duration={5} />
            <span className="counter">K</span>
          </div>
        </div>

        <div>
          EVENTS
          <div>
            <CountUp className="counter" end={125} duration={5} />
          </div>
        </div>

        <div>
          PRIZES
          <div>
            <CountUp className="counter" end={500} duration={5} />
            <span className="counter">K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
