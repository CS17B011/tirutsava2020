import React from "react";
import ComponentSlider from "@kapost/react-component-slider";
import tech_vid from "./tech-back-vid.mp4";
import cult_vid from "./cult-back-vid.mov";
import online_vid from "./online-back-vid.mp4";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./EventsPage.css";

const renderLeftArrow = () => <button>></button>;
const renderRightArrow = () => <button>></button>;
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  paddingTop: "50px"
};

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menu-bar" style={styles}>
        <ComponentSlider
          renderLeftArrow={renderLeftArrow}
          renderRightArrow={renderRightArrow}
        >
          {/* <div className="menu-item">The</div>
          <div className="menu-item">Quick</div>
          <div className="menu-item">Brown</div>
          <div className="menu-item">
            <i className="fa fa-firefox" aria-hidden="true" />
          </div>
          <div className="menu-item">Jumps</div>
          <div className="menu-item">Over</div>
          <div className="menu-item">The</div>
          <div className="menu-item">Lazy</div>
          <div className="menu-item">Dog</div> */}

          <div className="events-page ">
            <div
              className="category-link one menu-item"
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
                <a className="link link--kukuri" data-letters="TECHNICAL">
                  TECHNICAL
                </a>
              </div>
            </div>
            <div
              className="category-link two  menu-item"
              onClick={() => {
                //history.push(match.url + "/cultural");
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
              className="category-link three  menu-item"
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
              className="category-link three menu-item"
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
              className="category-link three menu-item"
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
              className="category-link three menu-item"
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
          </div>
        </ComponentSlider>
      </div>
    );
  }
}

export default MenuBar;
