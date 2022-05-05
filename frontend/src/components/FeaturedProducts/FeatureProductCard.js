import React from "react";
import Rating from "@mui/material/Rating";
const FeatureProductCard = ({
  cardImg,
  cardTitle,
  starRatngValue,
  originalPrice,
  discountPrice,
}) => {
  return (
    <>
      <div className="featureProductCard">
        <img
          src={cardImg}
          alt="product"
          className="featureProductCardLeftImg"
        />
        <div className="featureProductCardRight">
          <p className="featureProductPara">{cardTitle}</p>
          <Rating
            name="read-only"
            value={starRatngValue}
            readOnly
            className="starRating"
            size="small"
          />
          <p className="price">
            {discountPrice} <span>{originalPrice}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureProductCard;
