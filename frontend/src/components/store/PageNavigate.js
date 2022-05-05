import React, { useState, useEffect } from "react";
import CardItem from "../home/CardItem";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import heart from "../assets/heart.svg";
import fillcart from "../assets/fillcart.svg";
import Rating from "@mui/material/Rating";
const PageNavigate = () => {
  const [productpage, setProductPage] = useState([]);
  const [page, setpage] = useState(1);
  const calledProduct = async () => {
    // const url = "http://localhost:3002";
    const url = "https://ishopbackendsktech.herokuapp.com";
    try {
      const resProduct = await axios.get(`${url}/data1`);
      console.log(resProduct.data);
      setProductPage(resProduct.data);
    } catch (error) {
      console.log(`apierror ${error}`);
    }
  };
  useEffect(() => {
    calledProduct();
  }, [page]);
  return (
    <>
      <div className="paginationContainer">
        {productpage.slice(page * 6 - 6, page * 6).map((item, index) => {
          return (
            <div className="cardItemStore">
              <p className="badgeHotStore">HOT</p>
              <img src={item.url} alt="apple" className="cardItemImage" />
              <div className="heartFillCart">
                <img src={heart} alt="heart" className="heart" />
                <img
                  src={fillcart}
                  alt="heart"
                  className="fillcart"
                  // onClick={() => sendItem(item)}
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
      <div className="pagiNationBar">
        <Pagination
          count={3}
          shape="rounded"
          color="primary"
          defaultPage={page}
          onChange={(event, value) => setpage(value)}
        />
      </div>
    </>
  );
};

export default PageNavigate;
