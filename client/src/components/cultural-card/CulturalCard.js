import React from "react";
import { Link } from "react-router-dom";
import Frame from "./cult-frame.png";

const CulturalCard = ({ height, price, eventId, history, match }) => {
  return (
    <Link to={`/events/cultural/${eventId}`}>
      <div id="entire-card">
        <div
          style={{
            width: "100%",
            height: `${height}vh`,
            overflow: "hidden"
          }}
        >
          <div
            id="back-img"
            style={{
              backgroundImage: "url(" + Frame + ")"
            }}
          ></div>
          <div id="poster-back">
            {/* <div
              id="poster"
              style={{
                backgroundImage: "url(" + Pic + ")"
              }}
            >
              <div className="info-box"></div>
            </div> */}
          </div>

          <div
            onClick={() => console.log("we will redirect now")}
            id="event-btn"
          >
            button...
          </div>
          <div className="price-tag">Rs.{price}</div>
        </div>

        <div className="description">Hello dds</div>
      </div>
    </Link>
  );
};

export default CulturalCard;
