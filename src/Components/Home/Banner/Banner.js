import React from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <div className="sliderContainer">
      <Carousel className="customSlider">
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/G9YVdYB/pexels-nerfee-mirandilla-3186654.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="sliderItem">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/NsWXVYY/pexels-ella-olsson-1640777.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="bannerSlogan">
        <img src="https://i.ibb.co/F50Jh2G/Foodies.png" alt="" />
        <h1 className="mt-3 text-center text-white text-capitalize display-6">
          For thoese who love to eat.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
