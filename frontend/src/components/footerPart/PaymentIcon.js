import React from "react";
import visa from "../assets/master.svg";
import paypal from "../assets/paypal.svg";
import wastern from "../assets/wastern.svg";
import master from "../assets/master.svg";
const PaymentIcon = () => {
  return (
    <>
      <div className="payMentIcon">
        <img src={visa} alt="visa" className="paymentImg" />
        <img src={paypal} alt="paypal" className="paymentImg" />
        <img src={wastern} alt="wastern" className="paymentImg" />
        <img src={master} alt="master" className="paymentImg" />
      </div>
    </>
  );
};

export default PaymentIcon;
