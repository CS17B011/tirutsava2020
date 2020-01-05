import React from "react";
import {} from "react";
import Coverflow from "react-coverflow";
import OnlineEventCard from "../online-card/OnlineEventCard";
import MediaQuery from "react-responsive";

import "./OnlineEvents.css";

class OnlineEvents extends React.Component {
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
      <div className="online-events">
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
            <OnlineEventCard height="50" price="50" eventId="123" />
            <OnlineEventCard height="50" price="50" eventId="124" />
            <OnlineEventCard height="50" price="50" eventId="125" />
            <OnlineEventCard height="50" price="50" eventId="126" />
            <OnlineEventCard height="50" price="50" eventId="127" />
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
            <OnlineEventCard height="35" price="50" />
            <OnlineEventCard height="35" price="50" />
            <OnlineEventCard height="35" price="50" />
            <OnlineEventCard height="35" price="50" />
            <OnlineEventCard height="35" price="50" />
          </Coverflow>
        </MediaQuery>
      </div>
    );
  }
}

export default OnlineEvents;
