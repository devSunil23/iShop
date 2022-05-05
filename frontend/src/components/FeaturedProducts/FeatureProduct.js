import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatureProductCard from "./FeatureProductCard";
import headphone1 from "../assets/headPhone1.png";
import bag from "../assets/bag.png";
import light from "../assets/light.png";
const FeatureProduct = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="featureProductContainer">
        <h2 className="featureProductHead">FEATURED PRODUCTS</h2>
        <div className="featuredProductMultiCrausel">
          <Carousel responsive={responsive} infinite={true}>
            <div>
              <FeatureProductCard
                cardImg={headphone1}
                cardTitle="Beats Solo 2 On Ear Headphones - Black"
                starRatngValue={4}
                originalPrice="$599"
                discountPrice="$499"
              />
            </div>
            <div>
              <FeatureProductCard
                cardImg={bag}
                cardTitle="H-Squared tvTray"
                starRatngValue={4}
                originalPrice="$599"
                discountPrice="$499"
              />
            </div>
            <div>
              <FeatureProductCard
                cardImg={light}
                cardTitle="Netatmo Rain Gauge"
                starRatngValue={4}
                originalPrice="$599"
                discountPrice="$499"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
