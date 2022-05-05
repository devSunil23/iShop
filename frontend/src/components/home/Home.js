import { Slide } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import carousel1 from "../assets/corousel_1.png";
import carousel2 from "../assets/corousel_2.png";
import carousel3 from "../assets/corousel_3.png";
import BestSeller from "../home/BestSeller";
import BigBanner from "../home/BigBanner";
import FeatureProduct from "../FeaturedProducts/FeatureProduct";
import Services from "./Services";
import "./homeresponsive.css";
const Home = () => {
  return (
    <>
      <Carousel
        IndicatorIcon={false}
        animation="slide"
        className="carouselPart"
      >
        <img src={carousel1} alt="carousel1" className="caroImage" />
        <img src={carousel2} alt="carousel1" className="caroImage" />
        <img src={carousel3} alt="carousel1" className="caroImage" />
      </Carousel>
      <BestSeller />
      <BigBanner
        iphone="iPhone 6 Plus"
        bigLeft="bigLeft"
        bigBanner="bigBanner"
        bigLeftPara1="bigLeftPara2"
        shopNowButton="shopNowButton"
        mobilePhoneImage="mobilePhoneImage"
      />
      <Services />
      <FeatureProduct />
    </>
  );
};

export default Home;
