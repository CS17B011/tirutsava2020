import React from "react";

import tech_vid from "./tech-back-vid.mp4";
import cult_vid from "./cult-back-vid.mov";
import online_vid from "./online-back-vid.mp4";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./EventsPage.css";

// class EventsPage extends React.Component {
//   render() {
//     const { history, match } = this.props;
//     return (
//       <div className="events-page ">
//         <div
//           className="category-link one"
//           onClick={() => {
//             history.push(match.url + "/technical");
//           }}
//         >
//           {/*<video className="video" ref="vidRef" autoPlay loop muted>
//             <source src={tech_vid} type="video/mp4" />
//           </video>*/
//           /*onMouseEnter={() => {
//             this.refs.vidRef.pause();
//           }}*/}
//           <div className="video-text">
//             <a class="link link--kukuri" data-letters="TECHNICAL">
//               TECHNICAL
//             </a>
//           </div>
//           <video
//             ref="vidRef"
//             className="video"
//             src={tech_vid}
//             type="video/mp4"
//             autoPlay
//           ></video>
//         </div>
//         <div
//           className="category-link two"
//           onClick={() => {
//             history.push(match.url + "/cultural");
//           }}
//           onMouseEnter={() => {
//             this.refs.vidRef2.pause();
//           }}
//           onMouseLeave={() => {
//             this.refs.vidRef2.play();
//           }}
//         >
//           <div className="video-text">
//             <a class="link link--kukuri" href="#" data-letters="CULTURAL">
//               CULTURAL
//             </a>
//           </div>
//           <video
//             ref="vidRef2"
//             className="video"
//             src={cult_vid}
//             type="video/mp4"
//             autoPlay
//           ></video>
//         </div>
//         <div
//           className="category-link three"
//           onClick={() => {
//             history.push(match.url + "/online");
//           }}
//           onMouseEnter={() => {
//             this.refs.vidRef3.pause();
//           }}
//           onMouseLeave={() => {
//             this.refs.vidRef3.play();
//           }}
//         >
//           <div className="video-text">
//             <a class="link link--kukuri" href="#" data-letters="ONLINE">
//               ONLINE
//             </a>
//           </div>
//           <video
//             ref="vidRef3"
//             className="video"
//             src={online_vid}
//             type="video/mp4"
//             autoPlay
//           ></video>
//         </div>
//       </div>
//     );
//   }
// }

const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className="menu-item">{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = list => {
  return (
    <div className="events-page ">
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
          <a className="link link--kukuri" data-letters="TECHNICAL">
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
    </div>
  );
};

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class EventsPage extends React.Component {
  state = {
    selected: 0
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

///FINAL
// const EventsPage = ({ history, match }) => {
//   return (
//     <div className="events-page ">
//       <div
//         className="category-link one"
//         onClick={() => {
//           history.push(match.url + "/technical");
//         }}
//       >
//         {/*<video className="video" ref="vidRef" autoPlay loop muted>
//           <source src={tech_vid} type="video/mp4" />
//         </video>*/
//         /*onMouseEnter={() => {
//           this.refs.vidRef.pause();
//         }}*/}

//         <video className="video" autoPlay loop muted>
//           <source src={tech_vid} type="video/mp4" />
//         </video>
//         <div className="video-text">
//           <a className="link link--kukuri" data-letters="TECHNICAL">
//             TECHNICAL
//           </a>
//         </div>
//       </div>
//       <div
//         className="category-link two"
//         onClick={() => {
//           history.push(match.url + "/cultural");
//         }}
//       >
//         <video className="video" autoPlay loop muted>
//           <source src={cult_vid} type="video/mp4" />
//         </video>
//         <div className="video-text">
//           <a class="link link--kukuri" href="#" data-letters="CULTURAL">
//             CULTURAL
//           </a>
//         </div>
//       </div>
//       <div
//         className="category-link three"
//         onClick={() => {
//           history.push(match.url + "/online");
//         }}
//       >
//         <video className="video" autoPlay loop muted>
//           <source src={online_vid} type="video/mp4" />
//         </video>
//         <div className="video-text">
//           <a class="link link--kukuri" href="#" data-letters="ONLINE">
//             ONLINE
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
////FINAL

export default EventsPage;
