import ImageGallery from "react-image-gallery";
import "./gallery.css";
import Img from "./final.jpg";

import { MDBContainer } from "mdbreact";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import React from "react";
const images = [
  {
    original: "https://picsum.photos/id/1018/1200/799/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1200/799/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1200/799/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  },
  {
    original: "https://picsum.photos/id/1018/1200/799/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1200/799/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1200/799/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  },
  {
    original: "https://picsum.photos/id/1018/1200/799/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1200/799/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1200/799/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  },
  {
    original: "https://picsum.photos/id/1018/1200/799/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1200/799/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1200/799/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  },
  {
    original: "https://picsum.photos/id/1018/1200/799/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1200/799/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1200/799/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  },
  {
    original: "https://picsum.photos/id/1018/1200/799/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1200/799/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1200/799/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];

class MyGallery extends React.Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${Img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className="backgroundimgg"
      >
        <MDBContainer className="space-around">
          <div className="wrapper">
            <h1 className="neon head">Gallery</h1>
          </div>

          <div id="maingallery">
            <ImageGallery showBullets items={images} />
          </div>
        </MDBContainer>
      </div>
    );
  }
}
export default MyGallery;
