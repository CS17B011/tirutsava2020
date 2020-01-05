import React from "react";
import {} from "react";
import Particles from "react-particles-js";
import Coverflow from "react-coverflow";
import TechnicalEventCard from "../technical-event-card/TechnicalEventCard";
import MediaQuery from "react-responsive";

import "./TechnicalEvents.css";

class TechnicalEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(events => {
        this.setState({ events: events });
        console.log(events);
      });
  }

  render() {
    return (
      <div className="technical-events">
        <Particles
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute"
          }}
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                }
              }
            },
            retina_detect: true
          }}
        />
        <MediaQuery minDeviceWidth={769}>
          <Coverflow
            displayQuantityOfSide={2}
            currentFigureScale={1.5}
            navigation={true}
            enableHeading={false}
            clickable={true}
            active={0}
            media={{
              "@media (max-width: 900px)": {
                width: "100vw",
                height: "100vh"
              },
              "@media (min-width: 900px)": {
                width: "100vw",
                height: "100vh"
              }
            }}
          >
            <TechnicalEventCard height="50" price="50" eventId="123" />
            <TechnicalEventCard height="50" price="50" eventId="124" />
            <TechnicalEventCard height="50" price="50" eventId="125" />
            <TechnicalEventCard height="50" price="50" eventId="126" />
            <TechnicalEventCard height="50" price="50" eventId="127" />
          </Coverflow>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={769}>
          <Coverflow
            displayQuantityOfSide={0.7}
            currentFigureScale={1.7}
            navigation={false}
            enableHeading={false}
            clickable={true}
            active={0}
            media={{
              "@media (max-width: 900px)": {
                width: "100vw",
                height: "100vh"
              },
              "@media (min-width: 900px)": {
                width: "100vw",
                height: "100vh"
              }
            }}
          >
            <TechnicalEventCard height="35" price="50" />
            <TechnicalEventCard height="35" price="50" />
            <TechnicalEventCard height="35" price="50" />
            <TechnicalEventCard height="35" price="50" />
            <TechnicalEventCard height="35" price="50" />
          </Coverflow>
        </MediaQuery>
      </div>
    );
  }
}

export default TechnicalEvents;
