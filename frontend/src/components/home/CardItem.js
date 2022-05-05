import React from "react";
import appleMac from "../assets/applemac.png";
import heart from "../assets/heart.svg";
import fillcart from "../assets/fillcart.svg";
import Rating from "@mui/material/Rating";
const CardItem = ({
  ratingVaule,
  cardItem,
  badgeHot,
  imgUrl,
  name,
  price,
  mrp,
}) => {
  return (
    <>
      <div className={cardItem}>
        <p className={badgeHot}>HOT</p>
        <img src={imgUrl} alt="apple" className="cardItemImage" />
        <div className="heartFillCart">
          <img src={heart} alt="heart" className="heart" />
          <img src={fillcart} alt="heart" className="fillcart" />
        </div>
        <p className="cardSecondPara">{name}</p>
        <Rating
          name="read-only"
          value={ratingVaule}
          readOnly
          className="starRating starRatingCard"
        />
        <p className="price">
          {price} <span>{mrp}</span>
        </p>
      </div>
    </>
  );
};

export default CardItem;
