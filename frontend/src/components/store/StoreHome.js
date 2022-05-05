import React from "react";
import StoreHomeLeft from "./StoreHomeLeft";
import StoreHomeRight from "./StoreHomeRight";
const StoreHome = () => {
  return (
    <>
      <div className="storeHome">
        <StoreHomeLeft />
        <StoreHomeRight />
      </div>
    </>
  );
};

export default StoreHome;
