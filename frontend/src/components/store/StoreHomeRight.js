import React from "react";
import BigBanner from "../home/BigBanner";
import PageNavigate from "./PageNavigate";
import StorePart2 from "./StorePart2";
const StoreHomeRight = () => {
  return (
    <>
      <div className="storeHomeRight">
        <BigBanner
          iphone="iPhone 8"
          bigLeft="bigLeftStore"
          bigBanner="bigBannerStore"
          bigLeftPara2="bigLeftPara2Store"
          shopNowButton="shopNowButtonStore"
          mobilePhoneImage="mobilePhoneImageStore"
        />
        <StorePart2 />
        <PageNavigate />
      </div>
    </>
  );
};

export default StoreHomeRight;
