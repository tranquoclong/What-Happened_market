import React from "react";
import PropTypes from "prop-types";

const BrandCard = (props) => {
  return (
    <div className="brand-card">
      <p className="brand-card_title">{props.title} BRAND</p>
      <img className="brand-card_image" src={props.img} alt="" />
    </div>
  );
};

BrandCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default BrandCard;
