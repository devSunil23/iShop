import React, { useState } from "react";

const Incrdecr = ({ quantity }) => {
  const [qty, setQty] = useState(quantity);
  const decrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      window.alert("please select atleast one value");
    }
  };
  const increment = () => {
    setQty(qty + 1);
  };
  return (
    <>
      <div className="incerder">
        <span className="minus" onClick={decrement}>
          -
        </span>
        <span className="qtyItem">{qty}</span>
        <span className="plus" onClick={increment}>
          +
        </span>
      </div>
    </>
  );
};

export default Incrdecr;
