import React from "react";
import { Footer1 } from "./Footer1";
import Footer2 from "./Footer2";
import PaymentIcon from "./PaymentIcon";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Footer1 />
        <Footer2 />
      </div>
      <PaymentIcon />
    </>
  );
};

export default Footer;
