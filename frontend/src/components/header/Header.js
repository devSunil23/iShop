import React from "react";
import Headerfirst from "./Headerfirst";
import HeaderSecond from "./HeaderSecond";

const Header = () => {
  return (
    <>
      <div className="header">
        <Headerfirst />
        <HeaderSecond />
      </div>
    </>
  );
};

export default Header;
