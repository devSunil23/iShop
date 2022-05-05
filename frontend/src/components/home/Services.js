import React from "react";
import ServiceCoponent from "./ServiceCoponent";
import shipping from "../assets/shipping.svg";
import refund from "../assets/refund.svg";
import support from "../assets/support.svg";
const Services = () => {
  return (
    <>
      <div className="services">
        <ServiceCoponent
          logo={shipping}
          serviceHeading="FREE SHIPPING"
          servicePara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <ServiceCoponent
          logo={refund}
          serviceHeading="100% REFUND"
          servicePara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <ServiceCoponent
          logo={support}
          serviceHeading="SUPPORT 24/7"
          servicePara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
      </div>
    </>
  );
};

export default Services;
