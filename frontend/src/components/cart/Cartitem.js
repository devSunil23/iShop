import React, { useState } from "react";
const Cartitem = ({
  imgItem,
  description,
  price,
  mrp,
  id,
  deleteItem,
  quantity,
}) => {
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
      <div className="cartItem">
        <div className="cartItemLeft">
          <i class="fa-solid fa-xmark" onClick={() => deleteItem(id)}></i>
          <img src={imgItem} alt="headPhone" className="itemsImage" />
          <p className="itemDtails">{description}</p>
        </div>
        <div className="cartItemRight">
          <p className="rightPrice">${mrp}</p>
          <div className="incerder">
            <span className="minus" onClick={decrement}>
              -
            </span>
            <span className="qtyItem">{qty}</span>
            <span className="plus" onClick={increment}>
              +
            </span>
          </div>
          <div className="unitPriceItem">${price * qty}</div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
{
  /* <Cartitem
  imgItem={item.url}
  description={item.title}
  price={item.netPrice}
  mrp={item.mrp}
  key={index}
  id={index}
  deleteItem={deleteItem}
  quantity={item.quantity}
/>; */
}
