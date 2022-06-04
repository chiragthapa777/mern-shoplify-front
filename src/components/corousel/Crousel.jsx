import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./corousel.css"

export default function Crousel() {
  return (
    <div className="corousel">
      <img src="https://booksmandala.com/images/banner/new-arrivals-desktop.jpg" alt="" srcSet="" />
      <Carousel autoPlay  infiniteLoop transitionTime={1000} useKeyboardArrows  showThumbs={false} showStatus={false}  emulateTouch stopOnHover>
      <div>
        <img className="cImg" src="https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg" />
      </div>
      <div>
        <img className="cImg" src="https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_960_720.jpg" />
      </div>
      <div>
        <img className="cImg" src="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_960_720.jpg"  />
      </div>
    </Carousel>
    </div>
  );
}
