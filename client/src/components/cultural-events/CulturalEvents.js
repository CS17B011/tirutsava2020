import React from "react";
import {} from "react";
import Coverflow from "react-coverflow";
import CulturalCard from "../cultural-card/CulturalCard";
import MediaQuery from "react-responsive";
import Particles from "react-particles-js";

import "./CulturalEvents.css";

class CulturalEvents extends React.Component {
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
      <div className="cultural-events">
        <Particles
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute"
          }}
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3
                },
                repulse: {
                  distance: 400,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
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
            <CulturalCard height="50" price="50" eventId="123" />
            <CulturalCard height="50" price="50" eventId="124" />
            <CulturalCard height="50" price="50" eventId="125" />
            <CulturalCard height="50" price="50" eventId="126" />
            <CulturalCard height="50" price="50" eventId="127" />
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
            <CulturalCard height="35" price="50" />
            <CulturalCard height="35" price="50" />
            <CulturalCard height="35" price="50" />
            <CulturalCard height="35" price="50" />
            <CulturalCard height="35" price="50" />
          </Coverflow>
        </MediaQuery>
      </div>
    );
  }
}

export default CulturalEvents;
