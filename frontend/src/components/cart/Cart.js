import React, { useEffect, useState } from "react";
import Cardbottom from "./Cardbottom";
import "./cart.css";
import { useSelector } from "react-redux";
import { ADD, REMOVEONECART, RMVCART } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import "./cartresponsive.css";
const Cart = () => {
  const [price, setprice] = useState(0);
  const getData = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(RMVCART(id));
  };
  const send = (element) => {
    dispatch(ADD(element));
  };
  const remove = (element) => {
    dispatch(REMOVEONECART(element));
  };
  const total = () => {
    let price = 0;
    getData.map((item, index) => {
      price = item.netPrice * item.quantity + price;
    });
    setprice(price);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div className="cartHeading1">Cart</div>
      {getData.length ? (
        <div className="cart">
          <div className="cartInner">
            <div className="cartHeading2">
              <div className="cartHeading2Left">
                <p>PRODUCT</p>
              </div>
              <div className="cartHeading2Right">
                <p className="pricecart">PRICE</p>
                <p className="qty">QTY</p>
                <p className="unitPrice">UNIT PRICE</p>
              </div>
            </div>
            {getData.map((item, index) => {
              return (
                <div className="cartItem">
                  <div className="cartItemLeft">
                    <i
                      class="fa-solid fa-xmark"
                      onClick={() => deleteItem(index)}
                    ></i>
                    <img
                      src={item.url}
                      alt="headPhone"
                      className="itemsImage"
                    />
                    <p className="itemDtails">{item.title}</p>
                  </div>
                  <div className="cartItemRight">
                    <p className="rightPrice">${item.mrp}</p>
                    <div className="incerder">
                      <span className="minus" onClick={() => remove(item)}>
                        -
                      </span>
                      <span className="qtyItem">{item.quantity}</span>
                      <span className="plus" onClick={() => send(item)}>
                        +
                      </span>
                    </div>
                    <div className="unitPriceItem">
                      ₹{item.netPrice * item.quantity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Cardbottom SubTotal={price} ShippingFee={20} />
          );
        </div>
      ) : (
        <p className="emptyCarts">Your Cart Is Impty !</p>
      )}
    </>
  );
};

export default Cart;
