import React from "react";
import BrandImage from "../assets/iphone6plus.png";
const BigBanner = ({
  iphone,
  bigLeft,
  bigBanner,
  bigLeftPara2,
  shopNowButton,
  mobilePhoneImage,
}) => {
  return (
    <>
      <div className={bigBanner}>
        <div className={bigLeft}>
          <p className="bigLeftPara1">{iphone}</p>
          <p className={bigLeftPara2}>
            Performance and design. Taken right to the edge.
          </p>
          <p className={shopNowButton}>shop Now</p>
        </div>
        <div className="bigRight">
          <img src={BrandImage} alt="iphone" className={mobilePhoneImage} />
        </div>
      </div>
    </>
  );
};

export default BigBanner;
