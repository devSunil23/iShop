import React, { useEffect, useState } from "react";
import { storedataLeftFirst } from "../../storedata/storedataLeft";
import axios from "axios";
const Storeleftcard = () => {
  const [storeDataleft1, setstoreDataleft1] = useState([]);
  const getdata = async () => {
    try {
      const res = await axios.get(
        "https://ishopbackendsktech.herokuapp.com/dataac"
      );
      setstoreDataleft1(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="storeleftCard">
        <h3>ACCESORIES</h3>
        {storeDataleft1.map((item, index) => {
          return (
            <p className="appleCar">
              <span>{item.acName}</span>
              <span>{item.acValue}</span>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Storeleftcard;
