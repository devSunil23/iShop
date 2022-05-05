import React, { useState } from "react";
import Storeleftcard from "./Storeleftcard";
import Brand from "./Brand";
import { Slider } from "@material-ui/core";
import Circle from "@uiw/react-color-circle";
const StoreHomeLeft = () => {
  const [valuesik, setvaluesik] = useState([10, 60]);
  const handleChange = (e, data) => {
    setvaluesik(data);
  };
  return (
    <>
      <div className="storeHomeLeft">
        <Storeleftcard />
        <div className="storePrices">
          <h3 className="prices">PRICES</h3>
          <div className="ranges">
            <p className="ranges">Ranger</p>
            <p>₹ 13.99- ₹25.99</p>
          </div>
          <div className="doubleRange">
            <Slider value={valuesik} onChange={handleChange} />
          </div>
        </div>
        <div className="color">
          <h3 className="colorName">COLOR</h3>
          <Circle
            colors={["#006CFF", "#FC3E39", "#171717", "#FFF600", "#FF00B4"]}
            className="circleColor"
          />
        </div>
        <Brand />
      </div>
    </>
  );
};

export default StoreHomeLeft;
