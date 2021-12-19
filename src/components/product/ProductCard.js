import React from "react";
import PropTypes from "prop-types";
import likeIcon from "../../assets/Images/hearticon.png";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img className="product-card_image" src={props.img} alt="" />
      <p className="product-card_name">{props.name}</p>
      <div className="product-card_price-like">
        <p className="product-card_price-like_price">{props.price} won</p>
        <div className="product-card_price-like_like">
          <img
            className="product-card_price-like_like_icon"
            src={likeIcon}
            alt=""
          />
          <p className="product-card_price-like_like_number">{props.like}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
};

export default ProductCard;
