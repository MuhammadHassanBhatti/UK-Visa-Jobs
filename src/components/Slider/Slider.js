import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Google from "../../assets/static/images/image 21.png";
import Airbnb from "../../assets/static/images/image 22.png";
import DropBox from "../../assets/static/images/image 23.png";
import FedEx from "../../assets/static/images/image 24.png";
import HubSpot from "../../assets/static/images/image 25.png";
import Walmart from "../../assets/static/images/image 26.png";
import Amazon from "../../assets/static/images/image 27.png";
import Slack from "../../assets/static/images/image 29.png";
import Spotify from "../../assets/static/images/image 30.png";
import PayPal from "../../assets/static/images/image 31.png";
import Figma from "../../assets/static/images/image 32.png";

const Slider = () => {
  return (
    <div className="container">
      <h2 className="slider-tittle">This Week Top Employees</h2>

      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="slider-images">
            <img src={Google} alt="slider" />
            <img src={Airbnb} alt="slider" />
            <img src={PayPal} alt="slider" />
            <img src={Figma} alt="slider" />
            <img src={HubSpot} alt="slider" />
            <img src={Walmart} alt="slider" />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="slider-images">
            <img src={Amazon} alt="slider" />
            <img src={Slack} alt="slider" />
            <img src={Airbnb} alt="slider" />
            <img src={DropBox} alt="slider" />
            <img src={FedEx} alt="slider" />
            <img src={Spotify} alt="slider" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
