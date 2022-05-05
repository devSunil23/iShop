import React from "react";

const ServiceCoponent = ({ logo, serviceHeading, servicePara }) => {
  return (
    <>
      <div className="servicesComponent">
        <div className="shipping">
          <img src={logo} alt="" className="shippingLogo" />
          <h2 className="shippingServices">{serviceHeading}</h2>
          <p className="shippingPara">{servicePara}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCoponent;
