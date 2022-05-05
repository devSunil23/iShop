import React, { useEffect, useState } from "react";
import axios from "axios";
const Brand = () => {
  const [brandData, setbrandData] = useState([]);
  const [show, setshow] = useState(4);
  const brandDatafind = async () => {
    try {
      const res = await axios.get(
        "https://ishopbackendsktech.herokuapp.com/branddata"
      );
      setbrandData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const moreStore = () => {
    setshow((previous) => previous + 2);
  };
  useEffect(() => {
    brandDatafind();
  }, []);

  return (
    <>
      <div className="storeleftCard">
        <h3>BRAND</h3>
        {brandData.slice(0, show).map((item, index) => {
          return (
            <p className="appleCar">
              <span>{item.brandName}</span>
              <span>{item.brandCount}</span>
            </p>
          );
        })}
      </div>
      <div className="moreStore" onClick={moreStore}>
        MORE
      </div>
    </>
  );
};

export default Brand;
