import React from "react";

const Cardbottom = ({ SubTotal, ShippingFee }) => {
  return (
    <>
      <div className="cardBottom">
        <div className="cardBottomLeft">
          <input
            type="text"
            placeholder="Voucher Code"
            className="voucherCode"
          />
          <button className="reedom">Reedom</button>
        </div>
        <div className="cardBottomRight">
          <div className="subtotal paymentDetails">
            <span className="subTotalTitle">SubTotal</span>
            <span className="subTotalAmount">₹{SubTotal}</span>
          </div>
          <div className="shippingFee paymentDetails">
            <span className="shippingTitle">Shipping Fee</span>
            <span className="coupon">₹{ShippingFee}</span>
          </div>
          <div className="coupn paymentDetails">
            <span className="coupnTitle">Coupon</span>
            <span className="coupnApplicable">NO</span>
          </div>
          <div className="total paymentDetails">
            <span className="totalTitle">TOTAL</span>
            <span className="totalAmount">₹ {SubTotal + ShippingFee}</span>
          </div>
          <button className="buttonCheckOut">Check Out</button>
        </div>
      </div>
    </>
  );
};

export default Cardbottom;
