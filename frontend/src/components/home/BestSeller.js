import React, { useEffect, useState } from "react";
import heart from "../assets/heart.svg";
import fillcart from "../assets/fillcart.svg";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
const BestSeller = () => {
  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(8);
  const dispatch = useDispatch();
  const sendItem = (item) => {
    dispatch(ADD(item));
  };
  const calledProduct = async () => {
    const url = "https://ishopbackendsktech.herokuapp.com";
    try {
      const resProduct = await axios.get(`${url}/data1`);
      setProduct(resProduct.data);
    } catch (error) {
      console.log(`apierror ${error}`);
    }
  };
  const showMore = () => {
    setVisible((prev) => prev + 4);
  };
  useEffect(() => {
    calledProduct();
  }, []);

  return (
    <>
      <div className="bestSellerContainer">
        <h2 className="bestSellerHeading">BEST SELLER</h2>
        <ul className="bestSellerMenu">
          <li className="activeBestSeller">All</li>
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>Accessories</li>
        </ul>
        <div className="cardContainer">
          {product.slice(0, visible).map((item, index) => {
            return (
              <div className="cardItem">
                <p className="badgeHot">HOT</p>
                <img src={item.url} alt="apple" className="cardItemImage" />
                <div className="heartFillCart">
                  <img src={heart} alt="heart" className="heart" />
                  <img
                    src={fillcart}
                    alt="heart"
                    className="fillcart"
                    onClick={() => sendItem(item)}
                  />
                </div>
                <p className="cardSecondPara">{item.title}</p>
                <Rating
                  name="read-only"
                  value={item.starRating}
                  readOnly
                  className="starRating starRatingCard"
                />
                <p className="price">
                  ₹ {item.netPrice} <span>₹ {item.mrp}</span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="loadMore">
          <p onClick={showMore} style={{ cursor: "pointer" }}>
            Load More
          </p>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
